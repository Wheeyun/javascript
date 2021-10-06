const destinySearchForm = document.getElementById(
    'destinySearchForm',
);
const destinySearchInput = document.querySelector(
    '#destinySearchForm input',
);

const desnityContensDiv = document.getElementById(
    'desnityContensDiv',
);

destinySearchForm.addEventListener(
    'submit',
    searchUser,
);
const userList = document.createElement('ul');

// API 기본 주소
const apiKey = '13ca38538ea64e9ab6a5c83a4860e58d';
const baseUrl = 'https://www.bungie.net';
const baseHeader = new Headers({
    'X-API-Key': apiKey,
}); // 헤더 생성, api키 값 전송

// 유저 검색 --1
async function searchUser(e) {
    e.preventDefault();
    desnityContensDiv.innerHTML = '';
    userList.innerHTML = '';
    const username = destinySearchInput.value;
    //https://www.bungie.net/Platform/User/Search/Prefix/%ED%94%8C%EC%8A%88%EC%B9%B4/0/
    const url = `${baseUrl}/Platform/User/Search/Prefix/${username}/0/`;
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: baseHeader,
        });
        const searchedUser = await res.json();

        //고유하지 않은 닉네임으로 검색한 유저들을 리스트로 보여주기
        searchedUser.Response.searchResults.map(
            (user) => {
                paintUsers(user);
            },
        );
    } catch (e) {}

    destinySearchInput.value = '';
    desnityContensDiv.appendChild(userList); //div ul
}

//클릭한 유저 정보 가져오기 --2
async function getCharacterInfo(id, type) {
    desnityContensDiv.innerHTML = '';
    const displayNameDiv =
        document.createElement('div');

    try {
        //https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018508295808/?components=Profiles%2CCharacters%2CRecords
        const url = `${baseUrl}/Platform/Destiny2/${type}/Profile/${id}/?components=Profiles%2CCharacters%2CRecords`;
        const res = await fetch(url, {
            method: 'GET',
            headers: baseHeader,
        });
        const data = await res.json();
        const characterCodes = Object.keys(
            data.Response.characters.data,
        );
        // console.log(data);
        characterCodes.map((characterCode) => {
            paintWastedTime(
                data.Response.characters.data[
                    characterCode
                ],
            );
        }); //유저 별 생성한 캐릭터 데이터 하나씩 가져오기
        const USER_INFO =
            data.Response.profile.data.userInfo;
        displayNameDiv.id = 'userInfoDiv';
        displayNameDiv.innerText = `${USER_INFO.bungieGlobalDisplayName}#${USER_INFO.bungieGlobalDisplayNameCode}`;
        //유저 닉네임과 고유 코드 보여주기
        // console.log(
        //     data.Response.profile.data.userInfo
        //         .displayName,
        // );
        desnityContensDiv.prepend(displayNameDiv);
    } catch (e) {}
}
//검색한 유저 리스트 출력 --3
async function paintUsers(user) {
    if (user.destinyMemberships.length === 0) {
        //번지넷 계정은 있는데 실제(게임) 데이터가 없는 사람 거르기
        return;
    }
    const USER_MEMBERSHIPS =
        user.destinyMemberships[0];
    const userItem = document.createElement('li');
    const userNameSpan =
        document.createElement('span');
    const userCodeSpan =
        document.createElement('span');
    const userFlatformImg =
        document.createElement('img');
    const userEmblemImg =
        document.createElement('img');

    //검색한 이름으로 여러 유저 중에 하나를 고를 때(li:hover)
    userItem.addEventListener(
        'click',
        function () {
            getCharacterInfo(
                USER_MEMBERSHIPS.membershipId, //고유 멤버십id
                USER_MEMBERSHIPS.membershipType, // 플랫폼 별 값
            ); //이벤트함수의 콜백함수에 매개변수를 줄때
            //익명함수를 만들어서 그 안에 함수를 만들어 매개변수 지정
        },
    );

    try {
        //클릭한 유저의 캐릭터들 프로필 가져오기
        //https://www.bungie.net/Platform//Destiny2/{membershipType}/Profile/{destinyMembershipId}/?components=Characters
        const url = `${baseUrl}/Platform/Destiny2/${USER_MEMBERSHIPS.membershipType}/Profile/${USER_MEMBERSHIPS.membershipId}/?components=Characters`;
        const res = await fetch(url, {
            method: 'GET',
            headers: baseHeader,
        });
        const characterData = await res.json();

        userEmblemImg.src =
            baseUrl +
            characterData.Response.characters
                .data[
                Object.keys(
                    characterData.Response
                        .characters.data,
                )[0] //가져온 json형태의 데이터(오브젝트)의 키값을 배열로 나타냄
            ].emblemPath; // 캐릭터 배너 이미지 가져오기
    } catch (e) {}

    userItem.id = USER_MEMBERSHIPS.membershipId; //유저 고유 (번지)멤버십id //li태그의 id
    userNameSpan.innerText =
        user.bungieGlobalDisplayName; //유저 닉네임
    userCodeSpan.innerText =
        '#' + user.bungieGlobalDisplayNameCode; //유저 고유 닉네임id
    userCodeSpan.style.color = 'blue';

    userFlatformImg.src =
        baseUrl + USER_MEMBERSHIPS.iconPath; // 유저 플랫폼 별 이미지 주소 //steam,xbox,ps...

    userFlatformImg.className = 'flatImg';
    userEmblemImg.className = 'embImg';

    userItem.appendChild(userEmblemImg);
    userItem.appendChild(userNameSpan);
    userItem.appendChild(userCodeSpan);
    userItem.appendChild(userFlatformImg); //li.append

    userList.appendChild(userItem); //ul li
}

//유저의 캐릭터 별 플레이(버린) 타임, 전투력 등 출력 --4
function paintWastedTime(character) {
    const charDiv = document.createElement('div');
    const raceDiv = document.createElement('div');
    const lightDiv =
        document.createElement('div');
    const classDiv =
        document.createElement('div');
    const timeDiv = document.createElement('div');

    charDiv.className = 'charDiv';
    charDiv.style.backgroundImage = `url(${baseUrl}${character.emblemBackgroundPath})`;
    // console.log(character);

    //classType
    switch (character.classHash) {
        case 671679327:
            // console.log(
            //     '헌터 : ',
            //     character.minutesPlayedTotal,
            // );
            classDiv.innerText = '헌터';
            break;

        case 2271682572:
            classDiv.innerText = '워록';
            break;
        case 3655393761:
            classDiv.innerText = '타이탄';
            break;

        default:
            break;
    }

    //raceType
    switch (character.raceHash) {
        case 898834093:
            raceDiv.innerText = '엑소';
            break;
        case 2803282938:
            raceDiv.innerText = '각성자';
            break;

        case 3887404748:
            raceDiv.innerText = '인간';
            break;

        default:
            break;
    }
    const hour = parseInt(
        character.minutesPlayedTotal / 60,
    ); //총 플레이 타임, 단위 시간
    const min = character.minutesPlayedTotal % 60; //총 플레이 타임, 단위 분
    timeDiv.innerText = `${hour}시간 ${min}분 낭비`;
    lightDiv.innerText = `전투력 : ${character.light}`; //전투력 가져오기

    charDiv.appendChild(classDiv);
    charDiv.appendChild(timeDiv);
    charDiv.appendChild(raceDiv);
    charDiv.appendChild(lightDiv);

    desnityContensDiv.appendChild(charDiv);
}

//https://www.bungie.net/Platform/Destiny2/3/Account/4611686018492901076/Character/2305843009525205364/Stats/AggregateActivityStats/
///Destiny2/{membershipType}/Account/{destinyMembershipId}/Character/{characterId}/Stats/AggregateActivityStats/

//https://www.bungie.net/Platform/Destiny2/3/Account/4611686018492901076/Character/2305843009525205364/Stats/Activities/?page=0&mode=raid&count=250
