// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NosqlIndex extends pulumi.CustomResource {
    /**
     * Get an existing NosqlIndex resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NosqlIndexState, opts?: pulumi.CustomResourceOptions): NosqlIndex {
        return new NosqlIndex(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/nosqlIndex:NosqlIndex';

    /**
     * Returns true if the given object is an instance of NosqlIndex.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NosqlIndex {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NosqlIndex.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly isIfNotExists!: pulumi.Output<boolean>;
    public readonly keys!: pulumi.Output<outputs.NosqlIndexKey[]>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly tableId!: pulumi.Output<string>;
    public /*out*/ readonly tableName!: pulumi.Output<string>;
    public readonly tableNameOrId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NosqlIndexTimeouts | undefined>;

    /**
     * Create a NosqlIndex resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NosqlIndexArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NosqlIndexArgs | NosqlIndexState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NosqlIndexState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["isIfNotExists"] = state ? state.isIfNotExists : undefined;
            resourceInputs["keys"] = state ? state.keys : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tableId"] = state ? state.tableId : undefined;
            resourceInputs["tableName"] = state ? state.tableName : undefined;
            resourceInputs["tableNameOrId"] = state ? state.tableNameOrId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NosqlIndexArgs | undefined;
            if ((!args || args.keys === undefined) && !opts.urn) {
                throw new Error("Missing required property 'keys'");
            }
            if ((!args || args.tableNameOrId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tableNameOrId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["isIfNotExists"] = args ? args.isIfNotExists : undefined;
            resourceInputs["keys"] = args ? args.keys : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tableNameOrId"] = args ? args.tableNameOrId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["tableId"] = undefined /*out*/;
            resourceInputs["tableName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NosqlIndex.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NosqlIndex resources.
 */
export interface NosqlIndexState {
    compartmentId?: pulumi.Input<string>;
    isIfNotExists?: pulumi.Input<boolean>;
    keys?: pulumi.Input<pulumi.Input<inputs.NosqlIndexKey>[]>;
    lifecycleDetails?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    tableId?: pulumi.Input<string>;
    tableName?: pulumi.Input<string>;
    tableNameOrId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NosqlIndexTimeouts>;
}

/**
 * The set of arguments for constructing a NosqlIndex resource.
 */
export interface NosqlIndexArgs {
    compartmentId?: pulumi.Input<string>;
    isIfNotExists?: pulumi.Input<boolean>;
    keys: pulumi.Input<pulumi.Input<inputs.NosqlIndexKey>[]>;
    name?: pulumi.Input<string>;
    tableNameOrId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NosqlIndexTimeouts>;
}
