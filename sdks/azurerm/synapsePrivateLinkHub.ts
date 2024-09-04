// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SynapsePrivateLinkHub extends pulumi.CustomResource {
    /**
     * Get an existing SynapsePrivateLinkHub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SynapsePrivateLinkHubState, opts?: pulumi.CustomResourceOptions): SynapsePrivateLinkHub {
        return new SynapsePrivateLinkHub(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/synapsePrivateLinkHub:SynapsePrivateLinkHub';

    /**
     * Returns true if the given object is an instance of SynapsePrivateLinkHub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SynapsePrivateLinkHub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SynapsePrivateLinkHub.__pulumiType;
    }

    public readonly location!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SynapsePrivateLinkHubTimeouts | undefined>;

    /**
     * Create a SynapsePrivateLinkHub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SynapsePrivateLinkHubArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SynapsePrivateLinkHubArgs | SynapsePrivateLinkHubState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SynapsePrivateLinkHubState | undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as SynapsePrivateLinkHubArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SynapsePrivateLinkHub.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SynapsePrivateLinkHub resources.
 */
export interface SynapsePrivateLinkHubState {
    location?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.SynapsePrivateLinkHubTimeouts>;
}

/**
 * The set of arguments for constructing a SynapsePrivateLinkHub resource.
 */
export interface SynapsePrivateLinkHubArgs {
    location: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.SynapsePrivateLinkHubTimeouts>;
}
