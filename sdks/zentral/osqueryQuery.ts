// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OsqueryQuery extends pulumi.CustomResource {
    /**
     * Get an existing OsqueryQuery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OsqueryQueryState, opts?: pulumi.CustomResourceOptions): OsqueryQuery {
        return new OsqueryQuery(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'zentral:index/osqueryQuery:OsqueryQuery';

    /**
     * Returns true if the given object is an instance of OsqueryQuery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OsqueryQuery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OsqueryQuery.__pulumiType;
    }

    /**
     * If `true`, the query will be used as compliance check. Defaults to `false`.
     */
    public readonly complianceCheckEnabled!: pulumi.Output<boolean>;
    /**
     * Description of the query.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Only run on Osquery versions greater than or equal-to this version string
     */
    public readonly minimumOsqueryVersion!: pulumi.Output<string | undefined>;
    /**
     * Name of the query.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Restrict the query to some platforms, default is 'all' platforms
     */
    public readonly platforms!: pulumi.Output<string[]>;
    /**
     * Attributes to link a query to a pack for scheduling.
     */
    public readonly scheduling!: pulumi.Output<outputs.OsqueryQueryScheduling | undefined>;
    /**
     * The SQL query to run.
     */
    public readonly sql!: pulumi.Output<string>;
    /**
     * `ID` of the machine tag that is updated by this query.
     */
    public readonly tagId!: pulumi.Output<number | undefined>;
    /**
     * Description of the results returned by the query.
     */
    public readonly value!: pulumi.Output<string>;
    /**
     * Version of the query.
     */
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a OsqueryQuery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OsqueryQueryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OsqueryQueryArgs | OsqueryQueryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OsqueryQueryState | undefined;
            resourceInputs["complianceCheckEnabled"] = state ? state.complianceCheckEnabled : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["minimumOsqueryVersion"] = state ? state.minimumOsqueryVersion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["platforms"] = state ? state.platforms : undefined;
            resourceInputs["scheduling"] = state ? state.scheduling : undefined;
            resourceInputs["sql"] = state ? state.sql : undefined;
            resourceInputs["tagId"] = state ? state.tagId : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as OsqueryQueryArgs | undefined;
            if ((!args || args.sql === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sql'");
            }
            resourceInputs["complianceCheckEnabled"] = args ? args.complianceCheckEnabled : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["minimumOsqueryVersion"] = args ? args.minimumOsqueryVersion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["platforms"] = args ? args.platforms : undefined;
            resourceInputs["scheduling"] = args ? args.scheduling : undefined;
            resourceInputs["sql"] = args ? args.sql : undefined;
            resourceInputs["tagId"] = args ? args.tagId : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OsqueryQuery.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OsqueryQuery resources.
 */
export interface OsqueryQueryState {
    /**
     * If `true`, the query will be used as compliance check. Defaults to `false`.
     */
    complianceCheckEnabled?: pulumi.Input<boolean>;
    /**
     * Description of the query.
     */
    description?: pulumi.Input<string>;
    /**
     * Only run on Osquery versions greater than or equal-to this version string
     */
    minimumOsqueryVersion?: pulumi.Input<string>;
    /**
     * Name of the query.
     */
    name?: pulumi.Input<string>;
    /**
     * Restrict the query to some platforms, default is 'all' platforms
     */
    platforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Attributes to link a query to a pack for scheduling.
     */
    scheduling?: pulumi.Input<inputs.OsqueryQueryScheduling>;
    /**
     * The SQL query to run.
     */
    sql?: pulumi.Input<string>;
    /**
     * `ID` of the machine tag that is updated by this query.
     */
    tagId?: pulumi.Input<number>;
    /**
     * Description of the results returned by the query.
     */
    value?: pulumi.Input<string>;
    /**
     * Version of the query.
     */
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a OsqueryQuery resource.
 */
export interface OsqueryQueryArgs {
    /**
     * If `true`, the query will be used as compliance check. Defaults to `false`.
     */
    complianceCheckEnabled?: pulumi.Input<boolean>;
    /**
     * Description of the query.
     */
    description?: pulumi.Input<string>;
    /**
     * Only run on Osquery versions greater than or equal-to this version string
     */
    minimumOsqueryVersion?: pulumi.Input<string>;
    /**
     * Name of the query.
     */
    name?: pulumi.Input<string>;
    /**
     * Restrict the query to some platforms, default is 'all' platforms
     */
    platforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Attributes to link a query to a pack for scheduling.
     */
    scheduling?: pulumi.Input<inputs.OsqueryQueryScheduling>;
    /**
     * The SQL query to run.
     */
    sql: pulumi.Input<string>;
    /**
     * `ID` of the machine tag that is updated by this query.
     */
    tagId?: pulumi.Input<number>;
    /**
     * Description of the results returned by the query.
     */
    value?: pulumi.Input<string>;
}
