export default {
  aor: {
    action: {
      delete: 'Odstrani',
      show: 'Prikaži',
      list: 'Seznam',
      save: 'Shrani',
      create: 'Kreiraj',
      edit: 'Uredi',
      cancel: 'Prekliči',
      refresh: 'Osveži',
      add_filter: 'Dodaj filter',
      remove_filter: 'Odstrani filter',
      back: 'Nazaj',
    },
    boolean: {
      true: 'Da',
      false: 'Ne',
    },
    page: {
      list: 'Seznam %{name}',
      edit: '%{name} #%{id}',
      show: '%{name} #%{id}',
      create: 'Kreiraj %{name}',
      delete: 'Odstrani %{name} #%{id}',
      dashboard: 'Nadzorna plošča',
      not_found: 'Ni najdeno',
    },
    input: {
      file: {
        upload_several:
          'Spustite nekaj datotek, ki jih želite naložiti, ali kliknite, da jih izberete.',
        upload_single: 'Spustite datoteko, ki jo želite naložiti, ali jo kliknite, da jo izberete.',
      },
      image: {
        upload_several:
          'Spustite nekaj slik za nalaganje ali kliknite, da jih izberete.',
        upload_single:
          'Spustite sliko, ki jo želite naložiti, ali jo kliknite, da jo izberete.',
      },
    },
    message: {
      yes: 'Da',
      no: 'Ne',
      are_you_sure: 'Ali si prepričan?',
      about: 'O',
      not_found:
        'Ali ste vnesli napačen URL ali ste sledili napačni povezavi.',
    },
    navigation: {
      no_results: 'Ni rezultatov',
      page_out_of_boundaries: 'Številka strani %{page} je izven meja',
      page_out_from_end: 'Ne more presežt zadnjo stran',
      page_out_from_begin: 'Cannot go before page 1',
      page_range_info: '%{offsetBegin}-%{offsetEnd} od %{total}',
      next: 'Naprej',
      prev: 'Nazaj',
    },
    auth: {
      username: 'Uporabniško ime',
      password: 'Geslo',
      sign_in: 'Prijava',
      sign_in_error: 'Preverjanje pristnosti ni uspelo, poskusite znova',
      logout: 'Odjava',
    },
    notification: {
      updated: 'Element posodobljen',
      created: 'Element kreiran',
      deleted: 'Element odstranjen',
      item_doesnt_exist: 'Element ne obstaja',
      http_error: 'Napaka pri komunikaciji z strežnikom',
    },
    validation: {
      required: 'Zahtevano',
      minLength: 'Mora vsebovati vsaj %{min} znakov',
      maxLength: 'Mora vsebovati maksimalno %{max} znakov ali manj',
      minValue: 'Mora biti vsaj %{min}',
      maxValue: 'Mora biti %{max} ali manj',
      number: 'Mora biti število',
      email: 'Mora biti veljaven poštni naslov',
    },
  },
};