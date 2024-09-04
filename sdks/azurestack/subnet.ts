// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Subnet extends pulumi.CustomResource {
    /**
     * Get an existing Subnet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubnetState, opts?: pulumi.CustomResourceOptions): Subnet {
        return new Subnet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurestack:index/subnet:Subnet';

    /**
     * Returns true if the given object is an instance of Subnet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Subnet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Subnet.__pulumiType;
    }

    public readonly addressPrefix!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.SubnetTimeouts | undefined>;
    public readonly virtualNetworkName!: pulumi.Output<string>;

    /**
     * Create a Subnet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubnetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubnetArgs | SubnetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SubnetState | undefined;
            resourceInputs["addressPrefix"] = state ? state.addressPrefix : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["virtualNetworkName"] = state ? state.virtualNetworkName : undefined;
        } else {
            const args = argsOrState as SubnetArgs | undefined;
            if ((!args || args.addressPrefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addressPrefix'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.virtualNetworkName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'virtualNetworkName'");
            }
            resourceInputs["addressPrefix"] = args ? args.addressPrefix : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["virtualNetworkName"] = args ? args.virtualNetworkName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Subnet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Subnet resources.
 */
export interface SubnetState {
    addressPrefix?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SubnetTimeouts>;
    virtualNetworkName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Subnet resource.
 */
export interface SubnetArgs {
    addressPrefix: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.SubnetTimeouts>;
    virtualNetworkName: pulumi.Input<string>;
}
