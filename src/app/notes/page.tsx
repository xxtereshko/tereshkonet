import { createClient } from "@/shared/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <div className="p-8">
      {notes?.map((note) => (
        <div key={note.id} className="py-2">
          {note.title}
        </div>
      ))}
    </div>
  );
}
