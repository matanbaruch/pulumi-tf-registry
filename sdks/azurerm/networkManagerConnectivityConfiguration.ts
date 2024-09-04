// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkManagerConnectivityConfiguration extends pulumi.CustomResource {
    /**
     * Get an existing NetworkManagerConnectivityConfiguration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkManagerConnectivityConfigurationState, opts?: pulumi.CustomResourceOptions): NetworkManagerConnectivityConfiguration {
        return new NetworkManagerConnectivityConfiguration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/networkManagerConnectivityConfiguration:NetworkManagerConnectivityConfiguration';

    /**
     * Returns true if the given object is an instance of NetworkManagerConnectivityConfiguration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkManagerConnectivityConfiguration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkManagerConnectivityConfiguration.__pulumiType;
    }

    public readonly appliesToGroups!: pulumi.Output<outputs.NetworkManagerConnectivityConfigurationAppliesToGroup[]>;
    public readonly connectivityTopology!: pulumi.Output<string>;
    public readonly deleteExistingPeeringEnabled!: pulumi.Output<boolean | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly globalMeshEnabled!: pulumi.Output<boolean | undefined>;
    public readonly hub!: pulumi.Output<outputs.NetworkManagerConnectivityConfigurationHub | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkManagerId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkManagerConnectivityConfigurationTimeouts | undefined>;

    /**
     * Create a NetworkManagerConnectivityConfiguration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkManagerConnectivityConfigurationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkManagerConnectivityConfigurationArgs | NetworkManagerConnectivityConfigurationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkManagerConnectivityConfigurationState | undefined;
            resourceInputs["appliesToGroups"] = state ? state.appliesToGroups : undefined;
            resourceInputs["connectivityTopology"] = state ? state.connectivityTopology : undefined;
            resourceInputs["deleteExistingPeeringEnabled"] = state ? state.deleteExistingPeeringEnabled : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["globalMeshEnabled"] = state ? state.globalMeshEnabled : undefined;
            resourceInputs["hub"] = state ? state.hub : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkManagerId"] = state ? state.networkManagerId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkManagerConnectivityConfigurationArgs | undefined;
            if ((!args || args.appliesToGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appliesToGroups'");
            }
            if ((!args || args.connectivityTopology === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectivityTopology'");
            }
            if ((!args || args.networkManagerId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkManagerId'");
            }
            resourceInputs["appliesToGroups"] = args ? args.appliesToGroups : undefined;
            resourceInputs["connectivityTopology"] = args ? args.connectivityTopology : undefined;
            resourceInputs["deleteExistingPeeringEnabled"] = args ? args.deleteExistingPeeringEnabled : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["globalMeshEnabled"] = args ? args.globalMeshEnabled : undefined;
            resourceInputs["hub"] = args ? args.hub : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkManagerId"] = args ? args.networkManagerId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkManagerConnectivityConfiguration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkManagerConnectivityConfiguration resources.
 */
export interface NetworkManagerConnectivityConfigurationState {
    appliesToGroups?: pulumi.Input<pulumi.Input<inputs.NetworkManagerConnectivityConfigurationAppliesToGroup>[]>;
    connectivityTopology?: pulumi.Input<string>;
    deleteExistingPeeringEnabled?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    globalMeshEnabled?: pulumi.Input<boolean>;
    hub?: pulumi.Input<inputs.NetworkManagerConnectivityConfigurationHub>;
    name?: pulumi.Input<string>;
    networkManagerId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkManagerConnectivityConfigurationTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkManagerConnectivityConfiguration resource.
 */
export interface NetworkManagerConnectivityConfigurationArgs {
    appliesToGroups: pulumi.Input<pulumi.Input<inputs.NetworkManagerConnectivityConfigurationAppliesToGroup>[]>;
    connectivityTopology: pulumi.Input<string>;
    deleteExistingPeeringEnabled?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    globalMeshEnabled?: pulumi.Input<boolean>;
    hub?: pulumi.Input<inputs.NetworkManagerConnectivityConfigurationHub>;
    name?: pulumi.Input<string>;
    networkManagerId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.NetworkManagerConnectivityConfigurationTimeouts>;
}
