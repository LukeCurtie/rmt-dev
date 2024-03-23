import { useEffect, useState } from "react";


export function useJobItem(id: number | null) {
  const [jobItem, setJobItem] = useState<jobItemExpanded | null>(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    if (!id) return;
    const fetchJobs = async () => {
      setIsLoading(true);
      const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data/${id}`)
      const data = await response.json();
      setJobItem(data.jobItem);
      setIsLoading(false);

    }

    fetchJobs();
  }, [id])

  return [jobItem, isLoading] as const;
}

export function useDeBounce<T>(value: T, delay: number): T {
  const [deBouncedValue, setDeBouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDeBouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    }
  }, [value, delay])

  return deBouncedValue;
}

export function useJobItems(searchText: string) {
  const [jobItems, setJobItems] = useState<JobItem[]>([]);
  const [loading, setLoading] = useState(false);


  const totalNumberOfResults = jobItems.length;
  console.log(jobItems.length)


  const jobItemsSliced = jobItems.slice(0, 7);


  useEffect(() => {
    if (!searchText) return;

    const fetchJobs = async () => {
      setLoading(true);

      const response = await fetch(`https://bytegrad.com/course-assets/projects/rmtdev/api/data?search=${searchText}`)

      const data = await response.json();
      setJobItems(data.jobItems);


      setLoading(false);
    }

    fetchJobs();
  }, [searchText])

  return [jobItemsSliced, loading, totalNumberOfResults] as const;
}





export function useActiveId() {
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const id = +(window.location.hash.slice(1));
      setActiveId(id);
    }

    handleHashChange();

    window.addEventListener('hashchange', () => {
      handleHashChange();
    }
    )

    return () => {
      window.removeEventListener('hashchange', () => {
        handleHashChange();
      })
    }

  }
    , [])

  return activeId;
}
