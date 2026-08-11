const CREDS={u:'elin.archive',p:'harbor1017'};
function login(form,success){const u=form.querySelector('[name=u]').value.trim(),p=form.querySelector('[name=p]').value;if(u===CREDS.u&&p===CREDS.p){sessionStorage.setItem('elin-unlocked','1');location.href=success}else form.querySelector('.error').textContent='认证失败。请核对记录中的拼写与日期。'}
function police(form){let v=form.querySelector('input').value.trim().toUpperCase();document.querySelector('.case').style.display=v==='GH-MP-2019-1017-17'?'block':'none';form.querySelector('.error').textContent=v&&v!=='GH-MP-2019-1017-17'?'未找到对应编号。':''}
function requireUnlock(){if(sessionStorage.getItem('elin-unlocked')!=='1') location.replace('login.html')}
