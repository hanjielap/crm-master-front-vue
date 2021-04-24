import instance from "@/utils/request";

export function getCaptche(uuid) {

    //向后台发送uuid
    return instance.get(`common/getCaptcha/${uuid}`)
}