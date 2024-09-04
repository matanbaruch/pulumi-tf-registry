// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NtpTrustedKey extends pulumi.CustomResource {
    /**
     * Get an existing NtpTrustedKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NtpTrustedKeyState, opts?: pulumi.CustomResourceOptions): NtpTrustedKey {
        return new NtpTrustedKey(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ntpTrustedKey:NtpTrustedKey';

    /**
     * Returns true if the given object is an instance of NtpTrustedKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NtpTrustedKey {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NtpTrustedKey.__pulumiType;
    }

    /**
     * trusted key
     */
    public readonly key!: pulumi.Output<number>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a NtpTrustedKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NtpTrustedKeyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NtpTrustedKeyArgs | NtpTrustedKeyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NtpTrustedKeyState | undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as NtpTrustedKeyArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NtpTrustedKey.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NtpTrustedKey resources.
 */
export interface NtpTrustedKeyState {
    /**
     * trusted key
     */
    key?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NtpTrustedKey resource.
 */
export interface NtpTrustedKeyArgs {
    /**
     * trusted key
     */
    key: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
