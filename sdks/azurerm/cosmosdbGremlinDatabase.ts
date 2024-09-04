// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CosmosdbGremlinDatabase extends pulumi.CustomResource {
    /**
     * Get an existing CosmosdbGremlinDatabase resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CosmosdbGremlinDatabaseState, opts?: pulumi.CustomResourceOptions): CosmosdbGremlinDatabase {
        return new CosmosdbGremlinDatabase(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/cosmosdbGremlinDatabase:CosmosdbGremlinDatabase';

    /**
     * Returns true if the given object is an instance of CosmosdbGremlinDatabase.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CosmosdbGremlinDatabase {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CosmosdbGremlinDatabase.__pulumiType;
    }

    public readonly accountName!: pulumi.Output<string>;
    public readonly autoscaleSettings!: pulumi.Output<outputs.CosmosdbGremlinDatabaseAutoscaleSettings | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly throughput!: pulumi.Output<number>;
    public readonly timeouts!: pulumi.Output<outputs.CosmosdbGremlinDatabaseTimeouts | undefined>;

    /**
     * Create a CosmosdbGremlinDatabase resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CosmosdbGremlinDatabaseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CosmosdbGremlinDatabaseArgs | CosmosdbGremlinDatabaseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CosmosdbGremlinDatabaseState | undefined;
            resourceInputs["accountName"] = state ? state.accountName : undefined;
            resourceInputs["autoscaleSettings"] = state ? state.autoscaleSettings : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["throughput"] = state ? state.throughput : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as CosmosdbGremlinDatabaseArgs | undefined;
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["autoscaleSettings"] = args ? args.autoscaleSettings : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["throughput"] = args ? args.throughput : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CosmosdbGremlinDatabase.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CosmosdbGremlinDatabase resources.
 */
export interface CosmosdbGremlinDatabaseState {
    accountName?: pulumi.Input<string>;
    autoscaleSettings?: pulumi.Input<inputs.CosmosdbGremlinDatabaseAutoscaleSettings>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    throughput?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.CosmosdbGremlinDatabaseTimeouts>;
}

/**
 * The set of arguments for constructing a CosmosdbGremlinDatabase resource.
 */
export interface CosmosdbGremlinDatabaseArgs {
    accountName: pulumi.Input<string>;
    autoscaleSettings?: pulumi.Input<inputs.CosmosdbGremlinDatabaseAutoscaleSettings>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    throughput?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.CosmosdbGremlinDatabaseTimeouts>;
}
