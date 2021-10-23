import { Query, Resolver } from "type-graphql";
import { hotels_csv } from "./hotels_csv";

@Resolver()
export default class HotelResolver{
    
    @Query(() => [hotels_csv])
    hotels(){
        return hotels_csv.find();
    }
}