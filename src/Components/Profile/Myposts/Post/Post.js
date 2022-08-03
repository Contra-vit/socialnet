import React from 'react';
import b from './Post.module.css'

const Post = (props) => {

    let inner = React.createRef();
    let count = 0;
    function likeCount(event) {
        count += 1;
        inner.current.textContent = count


    }
    return (
        <div>
            <div className={b.posts} >
                <div className={b.item}>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRYYFhYaHRwcHBkcGhoZHBoYHBoeHBoaGRkeIS4mHh8rHxwZJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMBwYGEAYREDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xAA9EAACAQIEBAMGBAUEAQUBAAABAgADEQQSITEFQVFhBiJxEzKBkaHwB0KxwRRSYtHhI3KC8TNDkqKywhX/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A5xERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBJvh/hTFVkzogVdwXdUv6Am/wA7Tx4W4eK2IAYXSmC7Dkctgq/FivwvOnCqLafH1P6wOR8Q4dVoPkrIyNuAw0YdVYaMO4JmrOzpRSvTNOvT9pTO6/mRre+hGoYcwNefWc38UeGKmDf+eix8lQa3B2DW2b9eXQBARPdGiz5sovlUu22iLu3oLzxAREQEREBETfw/B6z0HxCofZIQpb+ZiwWyDdrEi5Gg16QNCZ8Hg6lZ8lJHqP8AyopY/G2w7mWXw94JrVznrXoUlJzZhZzlNjYH3RcEXPTQHeX7CNToJ7Ogns6Y0GXRnPVm3JP/AGYHM8R4Nx6IXbDPlAucpR2A/wBiMW+kgZ2l8UUN0FmG3frr+85r43wqpi3KABaipVCj8pcecf8AvDn4wICIiAiIgIiICIiAiIgIiICIiBcfAWELriGQhnsi5dQwBJOa9rWNraG/lO2ku2E4e9QajUXubm+/Ma99TKT+HrgDFAki6Uzcb6Ow256sNJ0jhgZwMjpUA3Uk5x3ViL/PbrA84bAOjAEZweamzADY2O4HVb20knVpKRla1rgg2Fg4OZWty1AJHIi45TdpsbWN+tiNfUHn6zDiUup7/rArWC4PQRnU0lDMWD3FxkfVwOiE7qNJU/EX4espZ8MRkAv7NySQRyRze+n8x3566dBSkxIJHa/X4+lj9mb1P3bNry+x9/SB+f8AFcFxNM2ehUFwDcKXFjt5kuPhe8wpw6sb2o1Ta17I5322HOfoF0ynS2U9JtlBYd/3gfnpeBYogn+GrgDrScfQreSeD8FYtwCUWmD/ADtY265VuR8QJ2+qgNvT/uYFUZr/ABgUDg/4e0lZTXd6lrEqAKaeh3ZvmveWtcKFdaVNQlJFCgAeVR0X6673JPSSNZT/AG9ed+39phZSBccyN+g6/Un0IgeKtI1DkW4RTqP527/0rI3FMlzluVU2L6Bb32DHT4bnU9BLNSoDLlJsD73Ujp8ecwYtKYAVUJa1lCAZgOgbZB3O/eBTcTV38pFt8wsSO3Pe0qHjymWqUqgBKmkATYkDLUe1zy98DXtOgYpjTuAlND6ZyO2Zybn0UDvKN+IOKY/w6Fm9xndfdDEvZWKjQ+6bG3WBTYiICIiAiIgIiICIiAiIgIiIFz/DgqXrKxTVDcG/tAAVN1/KyXGoOoIXkxl9wHCFY50fS4IdG19dDf52PrKZ4F4G6WxbMAGRlRB5i17ebMDYbHy+9cdrS7cMcb2yv1W+V+5H5T9PTUQJjDJUUEhw2voD27HvYehns1dTcb7g2Hz+usyUa5tt63sD8DsZhxNS9uv3v09YGbDNoQfn29PX9TM/sxz585qYYZltM4Nha/f7++UDEyWa3K/yM2EXlMbJYjp+0zJ9/GB59n+sxFLepm0w+/hGUCBi9kPj9/f/AHMGJQLb5D7+vzm6sjMWQXvfb6ff6XgZVfcLv15DoD3tIvidZ7eTY6ZuZP8ASv7m56Cb9M2QBQfjqSeZP7n/AKkbxN2YWBIB08nvMeincn/bYcySLgBB+zytYnO5Nre9l5G55t21tseko/j2opxIUE5qdNEboDq4Hc2e9+4l8TCsmgtm0zsNqa8qaHm1tL8td9ZyzjSVvbO9dGR3JaxFhrY2U7EAFRoTbaBoxEQEREBERAREQEREBERARE+GB1nwA6/wKBQQc7hgbMGa9zoQAQQRp+pkxUfI4YaDnqbdLjp8Zh8G8IoJhleg7slUByHsbNazDLYW2tpe9hJR6QN1NmHT9xAz4bFZhe1um1m/b95na7aga21Ftf8Akh+VxNPB0snu+Udz5fny9D9JsvxnDpo9WkpHI1EHyufvrAy4ZgD07ftr9/vna0i243gW2xNDXl7WmP8A9bz3T4nSJGWpTe+1qit+h9IEkT8Z6Q7HnsZrJVF+09B7Na/r9f7GBtlt/vlF7j0mnUxQHxns4gZT0694GWpUAB+/v/Mjlp5z/SNTfn0++9pp4niVK1mqoO7Og+hMUeN4RRZsVQvzPtUOp31vrAk6nS/qefproo+vaaOLc5fIt77vsLdr6277djNhOJYZh5K1Jz2qI3z1mDEZnNwTblbQev8Ak+mnMNRUOzWH9I1IvyH9R5k6yi/ia72w4LeQ+0OUHQMuRb2vrobA25nXWX/D4R+YsL673P8AYfLvKP8Ainw0r7KuBfem7a6X89NcuwHv66bgdIHPIiICIiAiIgIiICIiAiIgJa/A3hX+LY1KmuHptlYKwDO9lYJbcLZrlrjoOdqpOwfhlwxaWGFQOrNWsxsbhQtwqXtuPNcHYkjlAuOA4dTRFREyqqhVFrWUbAT7iKFtVA/f6TaWrbe09MbwPztx2vVatVWo7vldxZnZgLOVtYnblI0O21z8zr2nTvxa4SiezxKixZvZuQNzbOjHuAri/p0E5mtLN2EDx7RjfmfnMyCpYWB762v00vN7D0AF0H7/AFmdV6/fxgaOH4hXom6O9Poyuw25Xv3liwXjHGKf/Ir3H50BPzWxvr1kabEZTYjX036za8N4JcxqMgcXyoCLiw3ax05fSBlx/i3Fuf8AyBLfyIBy6tc8uvOQFXFVq2rM7/1M7HX4neWDxPw1UZKqJkVjlcAaXOzW2F7EfKR9wBlG2nS3zgRDrUtqD872+sxe0Ydj8pNsnIff3/mYMRQBXUft9RAiy7HQn6/STXhevVGJoIjugaogKh2AKlhmBANiMuaRBp5T2++c6n+EvB1NN8S6jMWyId7KoBYj1Zrf8YF3e9tNPjqfjcSv+I+ADGJ7N8yAMGV11KkXGo2IIP15WlwWgvxmrjcOGBF7dxYkdxmBH0gfnTiuAehVekwYFGIGYZSy3OVwLnRhqLE7zUnRPxM4FkRMQpZyGyOx9mDY3ylgiLfXS9zvOdwEREBERAREQEREBERAToP4dcZpqn8M7sHZyUFjlIIByqRzuGNj10nPoBI1BII1BBsQRsQRse8D9FYatfb9Gv8AUzYXE3O5B6cv1lJ8I+If4pP9QoKymxXNYsAAfaBeV9RYc1lmpo3X4XgePF/D/wCKwdSmou4AdBzLIc1vUgFf+U4thKAYEjWd8wyHrtvYW/aVvjngPDVnNQF6Dsbs1NgAx5kowIF+eW14HN6dA2Fh/wB956ekbXP6frLRX8DOmi44hbfmoK/1zj9J7peC1PlqYyo46IiU79tQx5wKhhsE1ap7NCRpd3Gopp19eQE6PwzhiBAq+VAoC3tsNN5u4PwylKiaWGVUB1Ja7Fm5O7HU/wBtpq8MUrXXD4mkS7K7Brh6eVCMoTa2hvqL3+gZuJ8GSojI/mVhlNrXtyYdxvfqROXVcK1Ko1Kp742PJ05MP3HLWdUx+IVcQlGjSZqhUOGQAJYtYh9diAdbHl6Txj/DSVqWXEJsxYMpsyEm/kcbD6GBzVaJy3Gn3ymOpQNuRH0vLa/gsDy08bUW/wCV6dOr9RlMzU/w9qNo+PYi2yUEQ/POYHP8XhwLdTsALk+gH3qJ3Hwnw04XCUqRADKt3t/OxLP6+ZiPhIjgfgPDYZxU89aouqvUYNlPIqqgC/Qm5EseJLAX+/nAzvX+HeazYgHmLem/oDI9qzcwT67SD8SeI1wlInMPam4RBzPMm35Re5/zArf4o8cYsuFRvLZXqCw01zU0202D9fd5HXnc916zuzO7F3Y3ZmNySeZM8QEREBERAREQEREBERAREQLR+HT2xijIrAo92PvIAL3Q9SbKR0J6Tr2Cqq25177CcD4ZivZVkqa2RgxC7lfzAajUrcb852Xh3EkqoKlJ1YHexvY9Oobt6QLYALC+vbl8tpr4quQLDQd/8CRDYtgLhrD56f3+c1sNjczhbZ33Gc+VertyA9IEwuFaou4VD1uSfhtPlHhNJSLFm6gAFT63Fv3n1aiAhmOdjs5BI9KaDl6b9TNgu500UH+axsP9o29IGynlG1uxNzILxB5lBRyrocyuLFrkbC+4IJuD1E3qtYAE5yVHvMx0HU/TaVnjXG8yFMOucnQOb5CdtG5+vY+sCc8OUyLu5LO1hc2FkUWCgcgP1Jk1XpK4N9R8/wD4m4+kqHBuOKAFrL7Ntr7oTbr8JaKWJBAudTsy6gn7vA0//wCSupQ3U6+Vhf5EW+s++xZBfMbDlbKfl+Y+hm61Ib5d/wAyaHtcDf6wa5UG9nXnawa3O67fp6QMeExquN9eXwmao/Q3HTf5GV3EVFuSha24sTfXtPCYtyMoZvXY/GBv4ioovY2vyt87azifi3HLXxVR0WwByXtYtk8uY6ne2nYLzvLp4z44aNLIj2ruV2a5VBqWPS+ii/8AMTynM4CIiAiIgIiICIiAiIgIiICIiAkhw7jFWi6urtlGW6XsjKD7pUaddbbm8j4gdL4N4mTEHKAUqEmysQ17AnyG2ptyO3ykmgOgsDfW99N73J5jczkDdt5+isF4epJTSmUBCU0S9zrlAF/oIEHS42tO4uubYuTc6crDb05d5ixHGmeyqSSbm9tAo1ZwvaxHwMla/hSmTdCE52Iv9ZH1+DVaedyBa1tLHy9+20DQTNUB9pf2ejBL7291bfUnn8RJIoBYNvbbSyjQW+elu01kxYUXKldiWIPTT/63/wC5s3B1J0NiPif2/aBmxOFDCzZSmxB1FjoNPlIKlXrUGUoWK38wNyLA6d9jr6HrJc4gE2OxFjry2/Q3hgXFlUvcchc7DU9L6iBstx9VvnVhsQQeRPP42B33mDG8XSoVytYsLqwFj6HrqLeomOrwOrVbyjIttc9xuCGUDfnfpN/CeFkUDOQemXTLpuL/AKQIBsUlO7u4QaksbAfE8/TcyB4t42RUAw3nc28zowVV5i2hLbdt99pcPH/CVfh9YKBenaqDbXyHzk9ymYXnD4HvEVmd2dzdmJJPc/tytyAniIgIiICIiAiIgIiICIiAiIgIiICIiB8YXFp+ifCnFxisJSrfmK5XHSovlcfMXHYifneXr8LOPGjiDh3/APHW2/pqKNG9CosfRekDtEXnktPl4HjE0EdcrqGXex117SuUaK1sS6IAKNIKh03f3nse11X1VpL8c4kMNh6lYi+RSVH8znRF+LED4zi2C8S4ynYJVKKTmayqc7FvMzNa5uSdrbn1gdaw2FSniijoCHQNTJubFD5010vqGHPRpOU6ar7qhfQATiNHxXiWda71Hf2b5kQ21Y/kva+XKTfn5h1M7Vg8SlVEqIbo6hlPYi4gZ58JnwmY69dUUu+ijUn06DrArX4i8YXDYJ1v/qVgaSDnZhZ29FQn4kDnOFSY8U8ffHVzVa6oPLTS/uJy/wCR3J69gJDwEREBERAREQEREBERAREQEREBERAREQEzYLFNSqJUT3qbK49VINvQ2t8ZhmSjTzMF2vA7/gPEOHd0po9/aIrp0AcBghPJrEED4b2vN2nCqV0UEWFtgenr1v8ApLt4a8aOQadZS5AORx7xsNFe++1s3cXvvA1/xR4lmKYZG0T/AFHHUkEInwBLW7rKNSUUwHJvZQ53sBYED+piNOgvzkzxMl6jO+pYkt31uf8AA6ASu18V7RBTUe6PO51FlNxb6fK0DHQa5phuZzMe5Nz+v0nT/wANOKlc+Cc60yWpnqt7ug9Cc3/I9Jy7BEZ7kZlTUjkeQGnU2+skuE13SstYMFamS9ybDMdLH15iB3vEVkRGd2CIoJZibAAbkmcx8ReOUrYfFKist7UqJN7lXuKjkflYpe3MA8rm+rxrjFbibLRpgIpdQiZrKSNc7nnbfbS2gvvUvElEUapw6OHFPyuwGhqbuAedjpfTUHQQIiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgSOG4ibZXGboefof77yycEyK2cHU99AOsplMajW2o1kvg8PmUjOVJuBl+G/w/SBk8QcVz1GRDoCQWHPkQO01uCYV6hdUW4VHdzyVEXMxJ7jT1IE11ogAqoLMbAWBJYnYADc30sJ2HgfhcYTh9ZGANepScuehKNlpg9FvbubnpA5TTq023BQmwJQ6G3MrN6nw1HWyVhbexBFzyHc7SJqUCr3ymx+/sSSwFlN+g0+ev32gb2AqnBk1FGd6YJA/KDbQ/MiVFnLEliSSSSTuSdST3vLVxSoGRzpcofpKpAREQEREBERAREQEREBERAREQEREBERAREQEREBM9HFMu3369ZgiB0b8LuGpXrviHZWalbJT55z/wCoR0Gw7nsJ1llBFjqDofQz83cG4rUw1Va1I2deXJlO6t2M7v4a8SUsbSz0zlcWzofeRu/UdDA5di0VHyXvkOTXnYW/zIzEW0sev399ZL+M3TDYpwGSrmYsEBOanmOaz+Ww10FjfTW0qdbiLtfZQTewHP1NzAkmf/TcNvlNv8SBmV8U5FixmKAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAm1w/iFWg+ei7U3sRmU8juCNiPWasQPrOWJLEkk3JJuSTuSTuZ8iICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiB//Z" alt="" />
                    {props.message}
                    <div>
                        <span onClick={likeCount}>Like
                            <div ref={inner} ></div>
                        </span>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Post;