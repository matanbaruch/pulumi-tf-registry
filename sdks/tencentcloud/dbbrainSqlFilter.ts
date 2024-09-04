// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DbbrainSqlFilter extends pulumi.CustomResource {
    /**
     * Get an existing DbbrainSqlFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DbbrainSqlFilterState, opts?: pulumi.CustomResourceOptions): DbbrainSqlFilter {
        return new DbbrainSqlFilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/dbbrainSqlFilter:DbbrainSqlFilter';

    /**
     * Returns true if the given object is an instance of DbbrainSqlFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DbbrainSqlFilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DbbrainSqlFilter.__pulumiType;
    }

    /**
     * filter duration.
     */
    public readonly duration!: pulumi.Output<number>;
    /**
     * filter id.
     */
    public /*out*/ readonly filterId!: pulumi.Output<number>;
    /**
     * filter key.
     */
    public readonly filterKey!: pulumi.Output<string>;
    /**
     * instance id.
     */
    public readonly instanceId!: pulumi.Output<string>;
    /**
     * maximum concurreny.
     */
    public readonly maxConcurrency!: pulumi.Output<number>;
    /**
     * product, optional value is &amp;#39;mysql&amp;#39;, &amp;#39;cynosdb&amp;#39;.
     */
    public readonly product!: pulumi.Output<string | undefined>;
    /**
     * session token.
     */
    public readonly sessionToken!: pulumi.Output<outputs.DbbrainSqlFilterSessionToken>;
    /**
     * sql type, optional value is SELECT, UPDATE, DELETE, INSERT, REPLACE.
     */
    public readonly sqlType!: pulumi.Output<string>;
    /**
     * filter status.
     */
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a DbbrainSqlFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DbbrainSqlFilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DbbrainSqlFilterArgs | DbbrainSqlFilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DbbrainSqlFilterState | undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["filterId"] = state ? state.filterId : undefined;
            resourceInputs["filterKey"] = state ? state.filterKey : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["maxConcurrency"] = state ? state.maxConcurrency : undefined;
            resourceInputs["product"] = state ? state.product : undefined;
            resourceInputs["sessionToken"] = state ? state.sessionToken : undefined;
            resourceInputs["sqlType"] = state ? state.sqlType : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as DbbrainSqlFilterArgs | undefined;
            if ((!args || args.duration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'duration'");
            }
            if ((!args || args.filterKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'filterKey'");
            }
            if ((!args || args.instanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instanceId'");
            }
            if ((!args || args.maxConcurrency === undefined) && !opts.urn) {
                throw new Error("Missing required property 'maxConcurrency'");
            }
            if ((!args || args.sessionToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sessionToken'");
            }
            if ((!args || args.sqlType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sqlType'");
            }
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["filterKey"] = args ? args.filterKey : undefined;
            resourceInputs["instanceId"] = args ? args.instanceId : undefined;
            resourceInputs["maxConcurrency"] = args ? args.maxConcurrency : undefined;
            resourceInputs["product"] = args ? args.product : undefined;
            resourceInputs["sessionToken"] = args ? args.sessionToken : undefined;
            resourceInputs["sqlType"] = args ? args.sqlType : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["filterId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DbbrainSqlFilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DbbrainSqlFilter resources.
 */
export interface DbbrainSqlFilterState {
    /**
     * filter duration.
     */
    duration?: pulumi.Input<number>;
    /**
     * filter id.
     */
    filterId?: pulumi.Input<number>;
    /**
     * filter key.
     */
    filterKey?: pulumi.Input<string>;
    /**
     * instance id.
     */
    instanceId?: pulumi.Input<string>;
    /**
     * maximum concurreny.
     */
    maxConcurrency?: pulumi.Input<number>;
    /**
     * product, optional value is &amp;#39;mysql&amp;#39;, &amp;#39;cynosdb&amp;#39;.
     */
    product?: pulumi.Input<string>;
    /**
     * session token.
     */
    sessionToken?: pulumi.Input<inputs.DbbrainSqlFilterSessionToken>;
    /**
     * sql type, optional value is SELECT, UPDATE, DELETE, INSERT, REPLACE.
     */
    sqlType?: pulumi.Input<string>;
    /**
     * filter status.
     */
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DbbrainSqlFilter resource.
 */
export interface DbbrainSqlFilterArgs {
    /**
     * filter duration.
     */
    duration: pulumi.Input<number>;
    /**
     * filter key.
     */
    filterKey: pulumi.Input<string>;
    /**
     * instance id.
     */
    instanceId: pulumi.Input<string>;
    /**
     * maximum concurreny.
     */
    maxConcurrency: pulumi.Input<number>;
    /**
     * product, optional value is &amp;#39;mysql&amp;#39;, &amp;#39;cynosdb&amp;#39;.
     */
    product?: pulumi.Input<string>;
    /**
     * session token.
     */
    sessionToken: pulumi.Input<inputs.DbbrainSqlFilterSessionToken>;
    /**
     * sql type, optional value is SELECT, UPDATE, DELETE, INSERT, REPLACE.
     */
    sqlType: pulumi.Input<string>;
    /**
     * filter status.
     */
    status?: pulumi.Input<string>;
}
