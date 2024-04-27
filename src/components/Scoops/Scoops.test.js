import { render, screen } from "@testing-library/react"
import Scoops from "."
import userEvent from "@testing-library/user-event"

test("API'den gelen her çeşit için bir kart basma", async () => {
    // test edilecek elemanı ekrana yansıtma
    render(<Scoops/>)

    /* test ortamında seçicilerin kullanılması 
    
    komut kuralları; 
    * get : elementler başlangıçta varsa get komutu kullanılır
    * find : elementin ekrana ne zaman basılacağı belli değilse
    * query : elementler dom'da yoksa ve koşula göre render edilecekse kullanılır

    not : find async bir metoddur ve kullanılırken async await ile kullanılır.
    */

    // resimler ekrana basılıyor mu kontrol
    const images = await screen.findAllByRole("img", {name : "çeşit"})

    // gelen resimlerin sayısı 4 mü?
    expect(images).toHaveLength(4)

})

test("çeşit ekleme işleminin toplam fiyata yansıması", async () => {
    render(<Scoops/>)
    const user = userEvent.setup()

    // toplam fiyata erişme
    const total = screen.getAllByRole("heading", {name : /çeşitler ücreti/i})

    // ekle butonuna erişme
    const buttons = await screen.findAllByRole("button", {name : "Ekle"})

    // bir çeşit ekleme ve fiyatını kontrol etme
    await user.click(buttons[0])
    expect(total).toHaveTextContent("20")

})

test("Çeşit sıfırlama işleminin toplama yansıması", async () => {
    render(<Scoops/>)
    const user = userEvent.setup()

    // ilgili elemanlar
    const total = screen.getByRole("heading", {
        name :  /çeşitler toplamı/i

    })
    const delButtons = await screen.findAllByRole("button", {name : "Sıfırla"})
    const addButton = await screen.findAllByRole("button", {name : "Ekle"})

    // 2 farklı çeşit ekletme
    await user.click(addButton[2])
    await user.dblClick(addButton[3])

    expect(total).toHaveTextContent(60)

    // 1 tane olan çeşidi sil ve toplamı kontrol et
    await user.click(delButtons[2])
    expect(total).toHaveTextContent(40)

    // sepette 2 tane olan çeşidi sıfırla ve fiyatı kontrol et
    await user.click(delButtons[3])
    expect(total).toHaveTextContent(0)
})