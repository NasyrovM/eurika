export class UuidUtils
{
    public static hasUUIDformat(uuid: string): boolean
    {
        const regex = new RegExp("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");
        return regex.test(uuid);
    }
}