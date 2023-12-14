const
    bodyEle = document.querySelector('body'),
    windowEle = document.querySelector('#window'),
    mainEle = document.querySelector('main'),
    gensoEle = document.querySelector('#genso'),
    exit_statusEle = document.querySelector('#exit-status'),
    GeNSOEle = document.querySelector('#GeNSO'),
    maxWidthLabelEle =document.querySelector('#maxWidthLabel');

gensoEle.addEventListener('input', () => {
    console.log(gensoEle.value.split('\n'))
    results = gensoEle.value.split('\n').map(v => txt2arr(v));
    exit_statusEle.value = results.map(v => v.exit_status + (v.exit_status === 0 ? ' - 完了🎉' : (v.exit_status === 1 ? ' - 入力なし' : (v.exit_status === 2 ? ' - 不可✘' : ' - 予期せぬエラー')))).join(', ')
    GeNSOEle.value = results.map(v => txtArr2txt(arr2txtArr(normalizeArr(v.arr))).join('\n')).join('\n\n')

    GeNSOEle.style.height = (GeNSOEle.scrollHeight - 1 * 2) + 'px';
    exit_statusEle.style.height = (exit_statusEle.scrollHeight - 1 * 2) + 'px';
    gensoEle.style.height = (gensoEle.scrollHeight - 1 * 2) + 'px';
    bodyEle.style.marginTop = (window.innerHeight - windowEle.scrollHeight) / 2;
});