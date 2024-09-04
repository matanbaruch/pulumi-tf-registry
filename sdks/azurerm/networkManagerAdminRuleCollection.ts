// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkManagerAdminRuleCollection extends pulumi.CustomResource {
    /**
     * Get an existing NetworkManagerAdminRuleCollection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkManagerAdminRuleCollectionState, opts?: pulumi.CustomResourceOptions): NetworkManagerAdminRuleCollection {
        return new NetworkManagerAdminRuleCollection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/networkManagerAdminRuleCollection:NetworkManagerAdminRuleCollection';

    /**
     * Returns true if the given object is an instance of NetworkManagerAdminRuleCollection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkManagerAdminRuleCollection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkManagerAdminRuleCollection.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkGroupIds!: pulumi.Output<string[]>;
    public readonly securityAdminConfigurationId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkManagerAdminRuleCollectionTimeouts | undefined>;

    /**
     * Create a NetworkManagerAdminRuleCollection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkManagerAdminRuleCollectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkManagerAdminRuleCollectionArgs | NetworkManagerAdminRuleCollectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkManagerAdminRuleCollectionState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkGroupIds"] = state ? state.networkGroupIds : undefined;
            resourceInputs["securityAdminConfigurationId"] = state ? state.securityAdminConfigurationId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkManagerAdminRuleCollectionArgs | undefined;
            if ((!args || args.networkGroupIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkGroupIds'");
            }
            if ((!args || args.securityAdminConfigurationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityAdminConfigurationId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkGroupIds"] = args ? args.networkGroupIds : undefined;
            resourceInputs["securityAdminConfigurationId"] = args ? args.securityAdminConfigurationId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkManagerAdminRuleCollection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkManagerAdminRuleCollection resources.
 */
export interface NetworkManagerAdminRuleCollectionState {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    securityAdminConfigurationId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkManagerAdminRuleCollectionTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkManagerAdminRuleCollection resource.
 */
export interface NetworkManagerAdminRuleCollectionArgs {
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkGroupIds: pulumi.Input<pulumi.Input<string>[]>;
    securityAdminConfigurationId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkManagerAdminRuleCollectionTimeouts>;
}
