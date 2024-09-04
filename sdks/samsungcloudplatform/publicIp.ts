// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PublicIp extends pulumi.CustomResource {
    /**
     * Get an existing PublicIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PublicIpState, opts?: pulumi.CustomResourceOptions): PublicIp {
        return new PublicIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'samsungcloudplatform:index/publicIp:PublicIp';

    /**
     * Returns true if the given object is an instance of PublicIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PublicIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PublicIp.__pulumiType;
    }

    /**
     * Description of public IP
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * IP address of public IP
     */
    public /*out*/ readonly ipv4!: pulumi.Output<string>;
    /**
     * Region name
     */
    public readonly region!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Public IP uplinkType ('INTERNET'|'DEDICATED_INTERNET'|'SHARED_GROUP'|'SECURE_INTERNET')
     */
    public readonly uplinkType!: pulumi.Output<string>;

    /**
     * Create a PublicIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PublicIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PublicIpArgs | PublicIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PublicIpState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipv4"] = state ? state.ipv4 : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["uplinkType"] = state ? state.uplinkType : undefined;
        } else {
            const args = argsOrState as PublicIpArgs | undefined;
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.uplinkType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'uplinkType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["uplinkType"] = args ? args.uplinkType : undefined;
            resourceInputs["ipv4"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PublicIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PublicIp resources.
 */
export interface PublicIpState {
    /**
     * Description of public IP
     */
    description?: pulumi.Input<string>;
    /**
     * IP address of public IP
     */
    ipv4?: pulumi.Input<string>;
    /**
     * Region name
     */
    region?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Public IP uplinkType ('INTERNET'|'DEDICATED_INTERNET'|'SHARED_GROUP'|'SECURE_INTERNET')
     */
    uplinkType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PublicIp resource.
 */
export interface PublicIpArgs {
    /**
     * Description of public IP
     */
    description?: pulumi.Input<string>;
    /**
     * Region name
     */
    region: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Public IP uplinkType ('INTERNET'|'DEDICATED_INTERNET'|'SHARED_GROUP'|'SECURE_INTERNET')
     */
    uplinkType: pulumi.Input<string>;
}
