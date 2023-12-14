elements = "H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og".split(' ');
elements_lower = elements.map((ele)=>ele.toLowerCase());

/*
# exit_status
- 0: 正常終了
- 1: txtが空文字
- 2: 行き詰まり
*/
function txt2arr(txt) {
    let exit_status = -1,
        arr = []
        txt = txt.toLowerCase();
    if (txt) {
        for (const ele of elements_lower) {
            if (txt.startsWith(ele)) {
                const result = txt2arr(txt.slice(ele.length));
                if (result.exit_status === 0) {
                    arr.push([ele,[result.arr]]);
                    exit_status = 0;
                } else if (result.exit_status === 1) {
                    arr.push(ele);
                    exit_status = 0;
                }
            }
        }
        if (arr.length === 0) {
            exit_status = 2;
        }
    } else {
        exit_status = 1;
    }
    return {'arr': arr, 'exit_status': exit_status};
}

function normalizeArr(arr) {
    if (Array.isArray(arr)){
        if (arr.length === 1 && Array.isArray(arr[0])) {
            return normalizeArr(arr[0]);
        }
        return arr.map(ele => normalizeArr(ele));
    } else {
        return arr;
    }
}

function arr2txtArr(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            return [];
        } else if (arr.length === 1) {
            return arr2txtArr(arr[0]);
        } else { //arr.length === 2
            if (Array.isArray(arr[0])) { //分離
                    return [...arr2txtArr(arr[0]), ...arr2txtArr(arr[1])];
            } else { //結合
                return arr2txtArr(arr[1]).map(ele=>[arr[0],...ele]);
            }
        }
    } else {
        return [[arr]];
    }
}

function txtArr2txt(arr) {
    return arr.map(ele0=>ele0.map(ele1=>(ele1.slice(0,1).toUpperCase())+ele1.slice(1)).join(''))
}