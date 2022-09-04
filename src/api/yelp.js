import axios from 'axios'
const url = "https://api.yelp.com/v3/businesses";

export default axios.create({
    baseURL: url,
    headers: {
        Authorization:"Bearer 8BIQJApW326cy91rvIkwjBPPCKb_ctakthK3QKybv-bKd6KLOU78slEBGecsyid8AyZYAMoci4v_XlMP18I-40a5UfChyEljmWTFZWAYjHBwii4IiaNs_kB0-ucTY3Yx"
    }
})

