import { fireEvent, render ,screen } from "@testing-library/react"
import Form from "."
import userEvent from "@testing-library/user-event";

test("Koşulların onaylanmasına göre buton aksiyonları", async () => {
    // arka planda test için form componentini ekrana basma
    render(<Form/>)

    // tıklama olayları için user kurulumu
    const user = userEvent.setup()

    // ilgili elemanları alma
    const orderBtn = screen.getByRole("button")
    const checkBox = screen.getByRole("checkbox")

    // buton başlangıçta aktif olmayacak
    expect(orderBtn).toBeDisabled();

    // Başlangıçta checkbox işaretlenmemiş olacak
     expect(checkBox).not.toBeChecked()

    // checkbox'ı işaretle ve aktif olup olmadığını kontrol et
    await user.click(checkBox)
    expect(orderBtn).toBeEnabled()

    // checkbox'ın işaretini kaldır ve butonun inaktif olmasını kontrol et
    await user.click(checkBox)
    expect(orderBtn).toBeDisabled()
});

test("Onayla butonu hover olduğunda bildirim verme", async () => {
    // arka planda formu render etme
    render(<Form/>)
    // tıklama olayları için user kurulumu
    const user = userEvent.setup()

    // ilgili elemanları alma
    const checkBox = screen.getByRole("checkbox")
    const button = screen.getByRole("button")

    // checkbox'a tıkla
    await user.click(checkBox)

    // butonun üstüne mouse götürme işlemi
    fireEvent.mouseEnter(button)

    // açılan yazıyı test kısmına aktarma
    const popup = screen.getByText("Size teslimat", {exact : false})
    // exact'ın amacı "Size teslimat" ile başlayan metin olup olmadığının kontrolü

    // yazının açılıp açılmama durumunun kontrolü
    expect(popup).toBeVisible() 

    // mouse'u buton üzerinden çekme
    fireEvent.mouseLeave(button)

    // popup gözükmeyecek
    expect(popup).not.toBeVisible();
})
