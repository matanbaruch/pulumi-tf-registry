// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemCertificateLocalUpload extends pulumi.CustomResource {
    /**
     * Get an existing SystemCertificateLocalUpload resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemCertificateLocalUploadState, opts?: pulumi.CustomResourceOptions): SystemCertificateLocalUpload {
        return new SystemCertificateLocalUpload(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/systemCertificateLocalUpload:SystemCertificateLocalUpload';

    /**
     * Returns true if the given object is an instance of SystemCertificateLocalUpload.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemCertificateLocalUpload {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemCertificateLocalUpload.__pulumiType;
    }

    public readonly cert!: pulumi.Output<string | undefined>;
    public readonly key!: pulumi.Output<string | undefined>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly passwd!: pulumi.Output<string | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly upload!: pulumi.Output<string | undefined>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemCertificateLocalUpload resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemCertificateLocalUploadArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemCertificateLocalUploadArgs | SystemCertificateLocalUploadState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemCertificateLocalUploadState | undefined;
            resourceInputs["cert"] = state ? state.cert : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["passwd"] = state ? state.passwd : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["upload"] = state ? state.upload : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as SystemCertificateLocalUploadArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["cert"] = args ? args.cert : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["passwd"] = args ? args.passwd : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["upload"] = args ? args.upload : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemCertificateLocalUpload.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemCertificateLocalUpload resources.
 */
export interface SystemCertificateLocalUploadState {
    cert?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    passwd?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    upload?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemCertificateLocalUpload resource.
 */
export interface SystemCertificateLocalUploadArgs {
    cert?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    passwd?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    upload?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
