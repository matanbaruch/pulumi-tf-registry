// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class EbpfServiceDiscovery extends pulumi.CustomResource {
    /**
     * Get an existing EbpfServiceDiscovery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EbpfServiceDiscoveryState, opts?: pulumi.CustomResourceOptions): EbpfServiceDiscovery {
        return new EbpfServiceDiscovery(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/ebpfServiceDiscovery:EbpfServiceDiscovery';

    /**
     * Returns true if the given object is an instance of EbpfServiceDiscovery.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EbpfServiceDiscovery {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EbpfServiceDiscovery.__pulumiType;
    }

    /**
     * When disabled, Dynatrace can only detect services in Full stack mode.
     */
    public readonly ebpf!: pulumi.Output<boolean>;
    /**
     * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
     */
    public readonly scope!: pulumi.Output<string | undefined>;

    /**
     * Create a EbpfServiceDiscovery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EbpfServiceDiscoveryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EbpfServiceDiscoveryArgs | EbpfServiceDiscoveryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EbpfServiceDiscoveryState | undefined;
            resourceInputs["ebpf"] = state ? state.ebpf : undefined;
            resourceInputs["scope"] = state ? state.scope : undefined;
        } else {
            const args = argsOrState as EbpfServiceDiscoveryArgs | undefined;
            if ((!args || args.ebpf === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ebpf'");
            }
            resourceInputs["ebpf"] = args ? args.ebpf : undefined;
            resourceInputs["scope"] = args ? args.scope : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EbpfServiceDiscovery.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EbpfServiceDiscovery resources.
 */
export interface EbpfServiceDiscoveryState {
    /**
     * When disabled, Dynatrace can only detect services in Full stack mode.
     */
    ebpf?: pulumi.Input<boolean>;
    /**
     * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
     */
    scope?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a EbpfServiceDiscovery resource.
 */
export interface EbpfServiceDiscoveryArgs {
    /**
     * When disabled, Dynatrace can only detect services in Full stack mode.
     */
    ebpf: pulumi.Input<boolean>;
    /**
     * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
     */
    scope?: pulumi.Input<string>;
}
