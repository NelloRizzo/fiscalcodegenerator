const extractConsonantsAndVowels = (text) => {
    const result = { consonants: '', vowels: '' }
    text.toUpperCase().split('').forEach(c => {
        if (c >= 'A' && c <= 'Z')
            if ("AEIOU".includes(c))
                result.vowels += c
            else
                result.consonants += c
    })
    return result
}

const parseFirstName = (firstName) => {
    const { consonants, vowels } = extractConsonantsAndVowels(firstName)
    var c = (consonants.length > 3) ? consonants.substring(0, 1) + consonants.slice(2) : consonants
    return (c + vowels + "XXX").substring(0, 3)
}

const parseLastName = (lastName) => {
    const { consonants, vowels } = extractConsonantsAndVowels(lastName)
    return (consonants + vowels + "XXX").substring(0, 3)
}

const parseBirthday = (birthday, gender) => {
    const months = "ABCDEHLMPRST"
    return "" + (birthday.slice(2, 4) % 100) + months[1 * birthday.slice(5, 7) - 1] + ('0' + (1 * birthday.slice(8) + (gender === 'f' ? 40 : 0))).slice(-2)
}

const calculateCheckCode = (fc) => {
    const A = 'A'.charCodeAt(0)
    const ZERO = '0'.charCodeAt(0)
    const odds = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23]
    let sum = 0
    fc.split('').forEach((c, i) => {
        let depl = c >= '0' && c <= '9' ? c.charCodeAt(0) - ZERO : c.charCodeAt(0) - A
        sum += (i % 2 === 0 ? odds[depl] : depl)
    })
    return String.fromCharCode(sum % 26 + A)
}

export default function generateFiscalCode(data) {
    const fc = parseLastName(data.lastName)
        + parseFirstName(data.firstName)
        + parseBirthday(data.birthday, data.gender)
        + ("X000" + data.birthCityCode).slice(-4)
    return fc + calculateCheckCode(fc)
}