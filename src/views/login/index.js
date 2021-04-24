
import {getCaptche} from "@/api/login" //分类信息

let login={
    created(){
        this.getCaptcha();

    },
    data(){
      return{
          base64:''
      }
    },
    methods:{

        //发送uuid
        async getCaptcha(){
           let base64=await getCaptche(this.guid())
        },

        //获得uuid
        guid(){
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

    }

}
export default login