// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CosBucketDomainCertificateAttachment extends pulumi.CustomResource {
    /**
     * Get an existing CosBucketDomainCertificateAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CosBucketDomainCertificateAttachmentState, opts?: pulumi.CustomResourceOptions): CosBucketDomainCertificateAttachment {
        return new CosBucketDomainCertificateAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/cosBucketDomainCertificateAttachment:CosBucketDomainCertificateAttachment';

    /**
     * Returns true if the given object is an instance of CosBucketDomainCertificateAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CosBucketDomainCertificateAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CosBucketDomainCertificateAttachment.__pulumiType;
    }

    /**
     * Bucket name.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * The certificate of specified doamin.
     */
    public readonly domainCertificate!: pulumi.Output<outputs.CosBucketDomainCertificateAttachmentDomainCertificate>;

    /**
     * Create a CosBucketDomainCertificateAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CosBucketDomainCertificateAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CosBucketDomainCertificateAttachmentArgs | CosBucketDomainCertificateAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CosBucketDomainCertificateAttachmentState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["domainCertificate"] = state ? state.domainCertificate : undefined;
        } else {
            const args = argsOrState as CosBucketDomainCertificateAttachmentArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.domainCertificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainCertificate'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["domainCertificate"] = args ? args.domainCertificate : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CosBucketDomainCertificateAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CosBucketDomainCertificateAttachment resources.
 */
export interface CosBucketDomainCertificateAttachmentState {
    /**
     * Bucket name.
     */
    bucket?: pulumi.Input<string>;
    /**
     * The certificate of specified doamin.
     */
    domainCertificate?: pulumi.Input<inputs.CosBucketDomainCertificateAttachmentDomainCertificate>;
}

/**
 * The set of arguments for constructing a CosBucketDomainCertificateAttachment resource.
 */
export interface CosBucketDomainCertificateAttachmentArgs {
    /**
     * Bucket name.
     */
    bucket: pulumi.Input<string>;
    /**
     * The certificate of specified doamin.
     */
    domainCertificate: pulumi.Input<inputs.CosBucketDomainCertificateAttachmentDomainCertificate>;
}
