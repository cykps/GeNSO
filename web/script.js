const
    htmlEle = document.querySelector('html'),
    windowEle = document.querySelector('window'),
    mainEle = document.querySelector('main'),
    gensoEle = document.querySelector('#genso'),
    exit_statusEle = document.querySelector('#exit-status'),
    GeNSOEle = document.querySelector('#GeNSO'),
    maxWidthLabelEle =document.querySelector('#maxWidthLabel');

gensoEle.addEventListener('input', () => {
    result = txt2arr(gensoEle.value);
    exit_statusEle.value = result.exit_status + (result.exit_status === 0 ? ' - 完了🎉' : (result.exit_status === 1 ? ' - 入力なし' : (result.exit_status === 2 ? ' - 不可✘' : ' - 予期せぬエラー')));
    GeNSOEle.value = txtArr2txt(arr2txtArr(normalizeArr(result.arr))).join('\n');

    GeNSOEle.style.height = (GeNSOEle.scrollHeight - 1 * 2) + 'px';
    gensoEle.style.height = (gensoEle.scrollHeight - 1 * 2) + 'px';
});

gensoEle.addEventListener('input', () => {
    console.log(gensoEle.value.split('\n'))
    results = gensoEle.value.split('\n').map(v => txt2arr(v));
    exit_statusEle.value = results.map(v => v.exit_status + (v.exit_status === 0 ? ' - 完了🎉' : (v.exit_status === 1 ? ' - 入力なし' : (v.exit_status === 2 ? ' - 不可✘' : ' - 予期せぬエラー')))).join(', ')
    // result.exit_status + (result.exit_status === 0 ? ' - 完了🎉' : (result.exit_status === 1 ? ' - 入力なし' : (result.exit_status === 2 ? ' - 不可✘' : ' - 予期せぬエラー')));
    GeNSOEle.value = results.map(v => txtArr2txt(arr2txtArr(normalizeArr(v.arr))).join('\n')).join('\n\n')
    //txtArr2txt(arr2txtArr(normalizeArr(result.arr))).join('\n');

    GeNSOEle.style.height = (GeNSOEle.scrollHeight - 1 * 2) + 'px';
    exit_statusEle.style.height = (exit_statusEle.scrollHeight - 1 * 2) + 'px';
    gensoEle.style.height = (gensoEle.scrollHeight - 1 * 2) + 'px';
    htmlEle.style.minHeight = windowEle.scrollHeight;
});