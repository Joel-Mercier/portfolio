"use client"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Locale, useChangeLocale, useCurrentLocale } from "@/locales/client";

const LocaleSelect = () => {
  const changeLocale = useChangeLocale()
  const currentLocale = useCurrentLocale()
  return (
    <Select onValueChange={(locale: Locale) => changeLocale(locale)} value={currentLocale}>
      <SelectTrigger>
        <SelectValue placeholder={currentLocale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="fr">FR</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default LocaleSelect