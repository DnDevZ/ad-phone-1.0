Adphone = {}

Adphone.RepeatTimeout = 2000
Adphone.CallRepeats   = 10
Adphone.OpenPhone     = "k"
Adphone.Webhook       = "seuwebbook"
Adphone.WebhookBank   = "seuwebbook"
Adphone.Field         = "files[]"
Adphone.VerifyItem    = false
Adphone.ItemPhone     = ""
Adphone.CallSystem    = "pmavoice" --tokovoip | mumblevoip | saltychat | pmavoice
Adphone.CheckLife     = 101
Adphone.IPAddress     = "http://#/"
Adphone.Permission    = "Admin" -- Grupo de Permisssão para adicionar verificado
Adphone.NotifyAll     = true -- Ativar notificaçõpes globais no servidor
Adphone.AllPostsInsta = true -- Ativar todos os post dos instagram
Adphone.UseMoving     = true -- Usar o celular e andar
Adphone.NameVRPPlayer = "player" -- nome da vrp_player Caso Esteja Usando Summerz!
Adphone.TablePlayerDB = "vrp_user_data" -- nome da vrp_user_data mudar somente se for salvo em outro local!
Adphone.Locale        = "br"
Adphone.ButtonDisable = { 
    0,
    1,
    2,
    22, 
    24, 
    26, 
    36, 
    37, 
    60, 
    62, 
    106,
    114,
    121,
    140,
    141,
    142,
    199,
    245,
    257,
    263,
    264,
    309,
    331,
}

Adphone.HelpList = {
    ['policia'] = {
        name        = "Policia Militar",
        description = "Chame uma Unidade movél - Policia",
        text        = "Chame uma Unidade movél - Policia",
        message     = "Descreva a situação:",
        emergency   = true,
        staff       = false,
        image       = "https://i.lcpdfrusercontent.com/screenshots/monthly_2020_07/271590_20200630222342_1.png.a17364b16fdc65230dace2ac5c95e808.png",
        style       = "top: 15px;",
        groups      = {
            "policia.permissao"
        }
    },
    ['ems'] = {
        name        = "Hospital",
        description = "Chame uma unidade móvel - Hospital",
        text        = "Chame uma Unidade movél - Hospital",
        message    = "Descreva a situação:",
        emergency   = true,
        staff       = false,
        image       = "https://gtapolicemods.com/uploads/monthly_2020_11/Rambulance.png.d24e5be1cafdffe6786dd1f8dcd64678.png",
        style       = "top: 230px;",
        groups      = {
            "medico.permissao"
        }
    },
    ['mecanico'] = {
        name        = "Mecanico",
        description = "Chame uma Unidade movél - Mecanica",
        text        = "Chame uma Unidade movél - Mecanica",
        message     = "Descreva seu problema:",
        emergency   = false,
        staff       = false,
        image       = "https://img.gta5-mods.com/q75/images/legion-square-car-show-map-editor-menyoo/2b001e-3.jpg",
        style       = "top: 460px;",
        groups      = {
            "mecanico.permissao"
        }
    },
    ['staff'] = {
        name        = "Administração",
        description = "Administração",
        text        = "Chame alguem da Adminnistração!",
        message     = "Descreva a situação:",
        emergency   = false,
        staff       = true,
        image       = "https://d2skuhm0vrry40.cloudfront.net/2017/articles/1/8/9/9/1/9/5/guia-gta-5-online-ganhar-dinheiro-facil-subir-de-reputacao-e-dicas-1494252847034.jpg/EG11/resize/1200x-1/guia-gta-5-online-ganhar-dinheiro-facil-subir-de-reputacao-e-dicas-1494252847034.jpg",
        style       = "top: 605px;",
        groups      = {
        	"dv.permissao"
        }
    }
}

Adphone.NewsPermission = {
    "dv.permissao",
    "wazel.permissao"
}

Adphone.NewsAdvert = {
    title       = "Anuncie Aqui",
    description = "Anuncie seu serviço da cidade conosco da WAZEL",
    image       = "https://img.gta5-mods.com/q75/images/benny-s-tow-trucks-and-sast-tow-truck/4bcf6b-Screenshot(168).png"
}

Adphone.Client = {
    phone = "000-000",
    disabledApps = {}
}

Adphone.checkItemPhone = function(source, user_id, item)
    if checkIteminInvetory(user_id, item, 1) then
        return true
    else
        sendnotify(source,'negado',"Negado",_("dont_have_cell"),5000,'info')
        return false
    end
end

return Adphone