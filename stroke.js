var screen=document.querySelector('#screen');
var umur=document.querySelector('#inputan');
var bb=document.querySelector('#inputan2');
var tb=document.querySelector('#inputan3');

var dicek1=document.querySelector('#cek1');
var dicek2=document.querySelector('#cek2');
var dicek3=document.querySelector('#cek3');
var dicek4=document.querySelector('#cek4');
var dicek5=document.querySelector('#cek5');
var dicek6=document.querySelector('#cek6');
var dicek7=document.querySelector('#cek7');
var dicek8=document.querySelector('#cek8');
var dicek9=document.querySelector('#cek9');
var dicek10=document.querySelector('#cek10');

var btn=document.querySelectorAll('.btn');
var rule1 = 0
var rule2 = 0

item.addEventListener('click',(e)=>{
    btntext=e.target.innerText;
});

//jenis kelamin
function input1(param)
{
    document.getElementById('question1').style.backgroundColor = '#c2d40080'
    if (param=='laki-laki') 
    {
       rule1='laki-laki'
       param1= 1
       dicek1.value=rule1
    }  else 
        {
            if (param=='perempuan')
            {
                rule1='perempuan'
                param1=2
                dicek1.value=rule1
            } else
            {
                rule1='error'
                param1='error'
                dicek1.value=rule1
            }        
        }
}

//kategori umur
function input2(a)
{
    document.getElementById('question2').style.backgroundColor = '#c2d40080'
    if (a <= 1)
    {
        rule2 = 'bayi'
        param2 = 1
        dicek2.value = rule2
    } else
    {
        if (a<6)
        {
            rule2 = 'balita'
            param2 = 2
            dicek2.value = rule2
        } else
        {
            if (a <= 10)
            {
                rule2 = 'anak-anak'
                param2 = 3
                dicek2.value = rule2
            } else
            {
                if (a<=19)
                {
                    rule2 = 'remaja'
                    param2 = 4
                    dicek2.value = rule2
                } else
                {
                    if (a<=44)
                    {
                    rule2 = 'dewasa'
                    param2 = 5
                    dicek2.value = rule2
                    } else
                    {
                        if (a<=59)
                        {
                            rule2 = 'pra lanjut usia'
                            param2 = 6
                            dicek2.value = rule2
                        } else
                        {
                            if (a>59)
                            {
                                rule2 = 'lanjut usia'
                                param2 = 7
                                dicek2.value = rule2
                            } else
                            {
                                rule2 = 'error'
                                dicek2.value = rule2
                            }
                        }
                    }
                }
        
            }
        }
    }  
}

//riwayat hipertensi
function input3(param)
{
    document.getElementById('question3').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule3=1
       param3 = 1
       dicek3.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule3=0
            param3 = 2
            dicek3.value='Tidak'
        }   else
        {
            rule3='error'
            dicek3.value='error'
        }           
    }
}

//riwayat penyakit jantung
function input4(param)
{
    document.getElementById('question4').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule4=1
       param4 = 1
       dicek4.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule4=0
            param4 = 2
            dicek4.value='Tidak'
        }   else
        {
            rule4='error'
            dicek4.value='error'
        }           
    }
}

//status pernikahan
function input5(param)
{
    document.getElementById('question5').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule5=1
       param5 = 1
       dicek5.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule5=0
            param5 = 2
            dicek5.value='Tidak'
        }   else
        {
            rule5='error'
            dicek5.value='error'
        }           
    }
}

//tipe pekerjaan
function input6(param)
{
    document.getElementById('question6').style.backgroundColor = '#c2d40080'
    if (param=='ASN') 
    {
       rule6='ASN'
       param6 = 3
       dicek6.value=rule6
    }  else 
    {
        if(param=='self-employed')
        {
            rule6='self-employed'
            param6 = 4
            dicek6.value=rule6
        } else
        {
            if(param=='wiraswasta')
            {
                rule6='wiraswasta'
                param6 = 5
                dicek6.value=rule6
            } else
            {
                if(param=='belum bekerja')
                {
                    rule6='belum bekerja'
                    param6 = 1
                    dicek6.value=rule6
                } else
                {
                    if(param=='tidak bekerja')
                    {
                        rule6='tidak bekerja'
                        param6 = 2
                        dicek6.value=rule6
                    } else
                    {
                        rule6='error'
                        dicek6.value=rule6
                    }
                }
            }
        } 

    }
}

//area tempat tinggal
function input7(param)
{
    document.getElementById('question7').style.backgroundColor = '#c2d40080'
    if (param=='perkotaan') 
    {
       rule7='perkotaan'
       param7 = 1
       dicek7.value=rule7
    }  else 
    {
        if (param=='pedesaan')
        {
            rule7='pedesaan'
            param7 = 2
            dicek7.value=rule7
        } else
        {
            rule7='error'
            dicek7.value=rule7
        }        
    }
}


//riwayat diabetes
function input8(param)
{
    document.getElementById('question8').style.backgroundColor = '#c2d40080'
    if (param=='Ya') 
    {
       rule8=1
       param8 = 1
       dicek8.value='Ya'
    }  else 
    {
        if (param=='Tidak')
        {
            rule8=0
            param8 = 2
            dicek8.value='Tidak'
        }   else
        {
            rule8='error'
            dicek8.value='error'
        }           
    }
}

//kategori obesitas
function input9()
{
    document.getElementById('question9').style.backgroundColor = '#c2d40080'
    tinggi = tb.value/100
    bmi_value = bb.value/(tinggi*tinggi)
    if(bmi_value<=18.4)
    {
        rule9 = 'kurus'
        param9 = 1
        dicek9.value = bmi_value.toFixed(2) + ' - ' + rule9
    } else
    {
        if(bmi_value<=25)
        {
            rule9 = 'normal'
            param9 = 2
            dicek9.value = bmi_value.toFixed(2) + ' - ' + rule9
        } else
        {
            if(bmi_value>25)
            {
                rule9 = 'obesitas'
                param9 = 3
                dicek9.value = bmi_value.toFixed(2) + ' - ' + rule9
            } else
            {
                rule9 = 'error'
                dicek9.value = rule9
            }
        }
    }
}


//status merokok
function input10(param)
{
    document.getElementById('question10').style.backgroundColor = '#c2d40080'
    if (param=='tidak merokok') 
    {
       rule10='tidak merokok'
       param10 = 1
       dicek10.value=rule10
    }  else 
    {
        if(param=='pernah merokok')
        {
            rule10='pernah merokok'
            param10 = 2
            dicek10.value=rule10
        } else
        {
            if(param=='merokok')
            {
                rule10='merokok'
                param10 = 3
                dicek10.value=rule10
            } else
            {
                rule10='error'
                dicek10.value=rule10
            }            
        }
    }
}

function predictBest()
{
    const X = [param1, param2, param3, param4, param5, param6, param7, param8, param9, param10]
    const beta = [0.11382222,  0.65491527,  1.32050276, -2.39128767]
    const W = [[-0.14597964, -0.09471124, -0.03171088,  0.41485622, -0.19462606,  0.44683427, 0.03641036, -0.06619663,  0.21341752,  0.04040328],
        [ 0.30894465, -0.13080826, -0.17717637,  0.44972175,  0.00796171,  0.04218236, 0.13296552, -0.39103006, -0.14130704, -0.07033658],
        [-0.4798394,  0.43516065,  0.12955578, -0.43393105,  0.19720395,  0.41721405, 0.02349192,  0.19764095, -0.08249002,  0.31312091],
        [-0.15948851, 0.01958078, -0.4707685,  -0.34921991, -0.21895349, -0.31486194, 0.05381745, -0.11207814, -0.34823447,  0.36142027]]

    const WT = math.transpose(W)
    const Hinit = math.multiply(X, WT)
    const H = 1 / (1 + Math.exp(-Hinit))
    const y = math.multiply(H,beta)
    const yround = Math.round(y)

    if (yround==[1])
    {
        location.href='nostrokeResult.html'
    } else
    {
        location.href='strokeResult.html'
    }

}



