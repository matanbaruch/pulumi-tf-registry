// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CmGlobalResiliency extends pulumi.CustomResource {
    /**
     * Get an existing CmGlobalResiliency resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CmGlobalResiliencyState, opts?: pulumi.CustomResourceOptions): CmGlobalResiliency {
        return new CmGlobalResiliency(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bigipnext:index/cmGlobalResiliency:CmGlobalResiliency';

    /**
     * Returns true if the given object is an instance of CmGlobalResiliency.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CmGlobalResiliency {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CmGlobalResiliency.__pulumiType;
    }

    /**
     * DNS Listener Name. The DNS listener name must start with lowercase letters (a-z) and consist only of lowercase letters
     * (a-z) and digits (0-9).
     */
    public readonly dnsListenerName!: pulumi.Output<string>;
    /**
     * DNS Listener Port. Port number must be greater than or equal to 1. Port number must not exceed 65535. Port cannot be
     * updated once created
     */
    public readonly dnsListenerPort!: pulumi.Output<number>;
    /**
     * List of Instances
     */
    public readonly instances!: pulumi.Output<outputs.CmGlobalResiliencyInstance[]>;
    /**
     * Global Resiliency Group Name. The group name must start with lowercase letters (a-z) and consist only of lowercase
     * letters (a-z) and digits (0-9).
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Protocols to be added to the Global Resiliency Group. Protocols cannot be updated once created.
     */
    public readonly protocols!: pulumi.Output<string[]>;

    /**
     * Create a CmGlobalResiliency resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CmGlobalResiliencyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CmGlobalResiliencyArgs | CmGlobalResiliencyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CmGlobalResiliencyState | undefined;
            resourceInputs["dnsListenerName"] = state ? state.dnsListenerName : undefined;
            resourceInputs["dnsListenerPort"] = state ? state.dnsListenerPort : undefined;
            resourceInputs["instances"] = state ? state.instances : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protocols"] = state ? state.protocols : undefined;
        } else {
            const args = argsOrState as CmGlobalResiliencyArgs | undefined;
            if ((!args || args.dnsListenerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsListenerName'");
            }
            if ((!args || args.dnsListenerPort === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsListenerPort'");
            }
            if ((!args || args.instances === undefined) && !opts.urn) {
                throw new Error("Missing required property 'instances'");
            }
            if ((!args || args.protocols === undefined) && !opts.urn) {
                throw new Error("Missing required property 'protocols'");
            }
            resourceInputs["dnsListenerName"] = args ? args.dnsListenerName : undefined;
            resourceInputs["dnsListenerPort"] = args ? args.dnsListenerPort : undefined;
            resourceInputs["instances"] = args ? args.instances : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["protocols"] = args ? args.protocols : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CmGlobalResiliency.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CmGlobalResiliency resources.
 */
export interface CmGlobalResiliencyState {
    /**
     * DNS Listener Name. The DNS listener name must start with lowercase letters (a-z) and consist only of lowercase letters
     * (a-z) and digits (0-9).
     */
    dnsListenerName?: pulumi.Input<string>;
    /**
     * DNS Listener Port. Port number must be greater than or equal to 1. Port number must not exceed 65535. Port cannot be
     * updated once created
     */
    dnsListenerPort?: pulumi.Input<number>;
    /**
     * List of Instances
     */
    instances?: pulumi.Input<pulumi.Input<inputs.CmGlobalResiliencyInstance>[]>;
    /**
     * Global Resiliency Group Name. The group name must start with lowercase letters (a-z) and consist only of lowercase
     * letters (a-z) and digits (0-9).
     */
    name?: pulumi.Input<string>;
    /**
     * Protocols to be added to the Global Resiliency Group. Protocols cannot be updated once created.
     */
    protocols?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a CmGlobalResiliency resource.
 */
export interface CmGlobalResiliencyArgs {
    /**
     * DNS Listener Name. The DNS listener name must start with lowercase letters (a-z) and consist only of lowercase letters
     * (a-z) and digits (0-9).
     */
    dnsListenerName: pulumi.Input<string>;
    /**
     * DNS Listener Port. Port number must be greater than or equal to 1. Port number must not exceed 65535. Port cannot be
     * updated once created
     */
    dnsListenerPort: pulumi.Input<number>;
    /**
     * List of Instances
     */
    instances: pulumi.Input<pulumi.Input<inputs.CmGlobalResiliencyInstance>[]>;
    /**
     * Global Resiliency Group Name. The group name must start with lowercase letters (a-z) and consist only of lowercase
     * letters (a-z) and digits (0-9).
     */
    name?: pulumi.Input<string>;
    /**
     * Protocols to be added to the Global Resiliency Group. Protocols cannot be updated once created.
     */
    protocols: pulumi.Input<pulumi.Input<string>[]>;
}
