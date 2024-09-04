// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Query extends pulumi.CustomResource {
    /**
     * Get an existing Query resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QueryState, opts?: pulumi.CustomResourceOptions): Query {
        return new Query(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'honeycombio:index/query:Query';

    /**
     * Returns true if the given object is an instance of Query.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Query {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Query.__pulumiType;
    }

    /**
     * The dataset this Query is associated with. Use `__all__` for envionment-wide queries.
     */
    public readonly dataset!: pulumi.Output<string>;
    /**
     * A JSON object describing the query according to the Query Specification. While the JSON can be constructed manually, it
     * is easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    public readonly queryJson!: pulumi.Output<string>;

    /**
     * Create a Query resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QueryArgs | QueryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QueryState | undefined;
            resourceInputs["dataset"] = state ? state.dataset : undefined;
            resourceInputs["queryJson"] = state ? state.queryJson : undefined;
        } else {
            const args = argsOrState as QueryArgs | undefined;
            if ((!args || args.dataset === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataset'");
            }
            if ((!args || args.queryJson === undefined) && !opts.urn) {
                throw new Error("Missing required property 'queryJson'");
            }
            resourceInputs["dataset"] = args ? args.dataset : undefined;
            resourceInputs["queryJson"] = args ? args.queryJson : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Query.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Query resources.
 */
export interface QueryState {
    /**
     * The dataset this Query is associated with. Use `__all__` for envionment-wide queries.
     */
    dataset?: pulumi.Input<string>;
    /**
     * A JSON object describing the query according to the Query Specification. While the JSON can be constructed manually, it
     * is easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    queryJson?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Query resource.
 */
export interface QueryArgs {
    /**
     * The dataset this Query is associated with. Use `__all__` for envionment-wide queries.
     */
    dataset: pulumi.Input<string>;
    /**
     * A JSON object describing the query according to the Query Specification. While the JSON can be constructed manually, it
     * is easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    queryJson: pulumi.Input<string>;
}
