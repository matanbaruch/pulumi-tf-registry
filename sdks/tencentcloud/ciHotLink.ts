// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CiHotLink extends pulumi.CustomResource {
    /**
     * Get an existing CiHotLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CiHotLinkState, opts?: pulumi.CustomResourceOptions): CiHotLink {
        return new CiHotLink(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/ciHotLink:CiHotLink';

    /**
     * Returns true if the given object is an instance of CiHotLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CiHotLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CiHotLink.__pulumiType;
    }

    /**
     * bucket name.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * Anti-leech type, `white` is whitelist, `black` is blacklist.
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * domain address.
     */
    public readonly urls!: pulumi.Output<string[]>;

    /**
     * Create a CiHotLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CiHotLinkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CiHotLinkArgs | CiHotLinkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CiHotLinkState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["urls"] = state ? state.urls : undefined;
        } else {
            const args = argsOrState as CiHotLinkArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.urls === undefined) && !opts.urn) {
                throw new Error("Missing required property 'urls'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["urls"] = args ? args.urls : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CiHotLink.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CiHotLink resources.
 */
export interface CiHotLinkState {
    /**
     * bucket name.
     */
    bucket?: pulumi.Input<string>;
    /**
     * Anti-leech type, `white` is whitelist, `black` is blacklist.
     */
    type?: pulumi.Input<string>;
    /**
     * domain address.
     */
    urls?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a CiHotLink resource.
 */
export interface CiHotLinkArgs {
    /**
     * bucket name.
     */
    bucket: pulumi.Input<string>;
    /**
     * Anti-leech type, `white` is whitelist, `black` is blacklist.
     */
    type: pulumi.Input<string>;
    /**
     * domain address.
     */
    urls: pulumi.Input<pulumi.Input<string>[]>;
}
