// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TotalTls extends pulumi.CustomResource {
    /**
     * Get an existing TotalTls resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TotalTlsState, opts?: pulumi.CustomResourceOptions): TotalTls {
        return new TotalTls(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudflare:index/totalTls:TotalTls';

    /**
     * Returns true if the given object is an instance of TotalTls.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TotalTls {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TotalTls.__pulumiType;
    }

    /**
     * The Certificate Authority that Total TLS certificates will be issued through. Available values: `google`,
     * `lets_encrypt`.
     */
    public readonly certificateAuthority!: pulumi.Output<string | undefined>;
    /**
     * Enable Total TLS for the zone.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    public readonly zoneId!: pulumi.Output<string>;

    /**
     * Create a TotalTls resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TotalTlsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TotalTlsArgs | TotalTlsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TotalTlsState | undefined;
            resourceInputs["certificateAuthority"] = state ? state.certificateAuthority : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["zoneId"] = state ? state.zoneId : undefined;
        } else {
            const args = argsOrState as TotalTlsArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.zoneId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zoneId'");
            }
            resourceInputs["certificateAuthority"] = args ? args.certificateAuthority : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["zoneId"] = args ? args.zoneId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TotalTls.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TotalTls resources.
 */
export interface TotalTlsState {
    /**
     * The Certificate Authority that Total TLS certificates will be issued through. Available values: `google`,
     * `lets_encrypt`.
     */
    certificateAuthority?: pulumi.Input<string>;
    /**
     * Enable Total TLS for the zone.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TotalTls resource.
 */
export interface TotalTlsArgs {
    /**
     * The Certificate Authority that Total TLS certificates will be issued through. Available values: `google`,
     * `lets_encrypt`.
     */
    certificateAuthority?: pulumi.Input<string>;
    /**
     * Enable Total TLS for the zone.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**
     */
    zoneId: pulumi.Input<string>;
}
