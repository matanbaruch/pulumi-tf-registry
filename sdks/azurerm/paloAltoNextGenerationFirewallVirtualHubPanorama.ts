// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class PaloAltoNextGenerationFirewallVirtualHubPanorama extends pulumi.CustomResource {
    /**
     * Get an existing PaloAltoNextGenerationFirewallVirtualHubPanorama resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PaloAltoNextGenerationFirewallVirtualHubPanoramaState, opts?: pulumi.CustomResourceOptions): PaloAltoNextGenerationFirewallVirtualHubPanorama {
        return new PaloAltoNextGenerationFirewallVirtualHubPanorama(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/paloAltoNextGenerationFirewallVirtualHubPanorama:PaloAltoNextGenerationFirewallVirtualHubPanorama';

    /**
     * Returns true if the given object is an instance of PaloAltoNextGenerationFirewallVirtualHubPanorama.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PaloAltoNextGenerationFirewallVirtualHubPanorama {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PaloAltoNextGenerationFirewallVirtualHubPanorama.__pulumiType;
    }

    public readonly destinationNats!: pulumi.Output<outputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat[] | undefined>;
    public readonly dnsSettings!: pulumi.Output<outputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings | undefined>;
    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly networkProfile!: pulumi.Output<outputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile>;
    public readonly panoramaBase64Config!: pulumi.Output<string>;
    public /*out*/ readonly panoramas!: pulumi.Output<outputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama[]>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts | undefined>;

    /**
     * Create a PaloAltoNextGenerationFirewallVirtualHubPanorama resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PaloAltoNextGenerationFirewallVirtualHubPanoramaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PaloAltoNextGenerationFirewallVirtualHubPanoramaArgs | PaloAltoNextGenerationFirewallVirtualHubPanoramaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PaloAltoNextGenerationFirewallVirtualHubPanoramaState | undefined;
            resourceInputs["destinationNats"] = state ? state.destinationNats : undefined;
            resourceInputs["dnsSettings"] = state ? state.dnsSettings : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkProfile"] = state ? state.networkProfile : undefined;
            resourceInputs["panoramaBase64Config"] = state ? state.panoramaBase64Config : undefined;
            resourceInputs["panoramas"] = state ? state.panoramas : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as PaloAltoNextGenerationFirewallVirtualHubPanoramaArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.networkProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkProfile'");
            }
            if ((!args || args.panoramaBase64Config === undefined) && !opts.urn) {
                throw new Error("Missing required property 'panoramaBase64Config'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["destinationNats"] = args ? args.destinationNats : undefined;
            resourceInputs["dnsSettings"] = args ? args.dnsSettings : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkProfile"] = args ? args.networkProfile : undefined;
            resourceInputs["panoramaBase64Config"] = args ? args.panoramaBase64Config : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["panoramas"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PaloAltoNextGenerationFirewallVirtualHubPanorama.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PaloAltoNextGenerationFirewallVirtualHubPanorama resources.
 */
export interface PaloAltoNextGenerationFirewallVirtualHubPanoramaState {
    destinationNats?: pulumi.Input<pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat>[]>;
    dnsSettings?: pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings>;
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkProfile?: pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile>;
    panoramaBase64Config?: pulumi.Input<string>;
    panoramas?: pulumi.Input<pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaPanorama>[]>;
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts>;
}

/**
 * The set of arguments for constructing a PaloAltoNextGenerationFirewallVirtualHubPanorama resource.
 */
export interface PaloAltoNextGenerationFirewallVirtualHubPanoramaArgs {
    destinationNats?: pulumi.Input<pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaDestinationNat>[]>;
    dnsSettings?: pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaDnsSettings>;
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkProfile: pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaNetworkProfile>;
    panoramaBase64Config: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.PaloAltoNextGenerationFirewallVirtualHubPanoramaTimeouts>;
}
