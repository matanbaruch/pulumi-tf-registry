// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LocalNetworkGateway extends pulumi.CustomResource {
    /**
     * Get an existing LocalNetworkGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LocalNetworkGatewayState, opts?: pulumi.CustomResourceOptions): LocalNetworkGateway {
        return new LocalNetworkGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/localNetworkGateway:LocalNetworkGateway';

    /**
     * Returns true if the given object is an instance of LocalNetworkGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LocalNetworkGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LocalNetworkGateway.__pulumiType;
    }

    public readonly addressSpaces!: pulumi.Output<string[] | undefined>;
    public readonly bgpSettings!: pulumi.Output<outputs.LocalNetworkGatewayBgpSettings | undefined>;
    public readonly gatewayAddress!: pulumi.Output<string | undefined>;
    public readonly gatewayFqdn!: pulumi.Output<string | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.LocalNetworkGatewayTimeouts | undefined>;

    /**
     * Create a LocalNetworkGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LocalNetworkGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LocalNetworkGatewayArgs | LocalNetworkGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LocalNetworkGatewayState | undefined;
            resourceInputs["addressSpaces"] = state ? state.addressSpaces : undefined;
            resourceInputs["bgpSettings"] = state ? state.bgpSettings : undefined;
            resourceInputs["gatewayAddress"] = state ? state.gatewayAddress : undefined;
            resourceInputs["gatewayFqdn"] = state ? state.gatewayFqdn : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as LocalNetworkGatewayArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["addressSpaces"] = args ? args.addressSpaces : undefined;
            resourceInputs["bgpSettings"] = args ? args.bgpSettings : undefined;
            resourceInputs["gatewayAddress"] = args ? args.gatewayAddress : undefined;
            resourceInputs["gatewayFqdn"] = args ? args.gatewayFqdn : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LocalNetworkGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LocalNetworkGateway resources.
 */
export interface LocalNetworkGatewayState {
    addressSpaces?: pulumi.Input<pulumi.Input<string>[]>;
    bgpSettings?: pulumi.Input<inputs.LocalNetworkGatewayBgpSettings>;
    gatewayAddress?: pulumi.Input<string>;
    gatewayFqdn?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.LocalNetworkGatewayTimeouts>;
}

/**
 * The set of arguments for constructing a LocalNetworkGateway resource.
 */
export interface LocalNetworkGatewayArgs {
    addressSpaces?: pulumi.Input<pulumi.Input<string>[]>;
    bgpSettings?: pulumi.Input<inputs.LocalNetworkGatewayBgpSettings>;
    gatewayAddress?: pulumi.Input<string>;
    gatewayFqdn?: pulumi.Input<string>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.LocalNetworkGatewayTimeouts>;
}
