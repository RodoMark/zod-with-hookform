export type Input = {
  label: { htmlFor: string },
  input: { type: string, id: string },
  options?: { [value: string]: string }
}

type FormInputProps = {
  inputs: Input[]
}

export default function(props: FormInputProps) {

}