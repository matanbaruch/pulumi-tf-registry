// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClbReplaceCertForLbs extends pulumi.CustomResource {
    /**
     * Get an existing ClbReplaceCertForLbs resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClbReplaceCertForLbsState, opts?: pulumi.CustomResourceOptions): ClbReplaceCertForLbs {
        return new ClbReplaceCertForLbs(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/clbReplaceCertForLbs:ClbReplaceCertForLbs';

    /**
     * Returns true if the given object is an instance of ClbReplaceCertForLbs.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClbReplaceCertForLbs {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClbReplaceCertForLbs.__pulumiType;
    }

    /**
     * Information such as the content of the new certificate.
     */
    public readonly certificate!: pulumi.Output<outputs.ClbReplaceCertForLbsCertificate>;
    /**
     * ID of the certificate to be replaced, which can be a server certificate or a client certificate.
     */
    public readonly oldCertificateId!: pulumi.Output<string>;

    /**
     * Create a ClbReplaceCertForLbs resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClbReplaceCertForLbsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClbReplaceCertForLbsArgs | ClbReplaceCertForLbsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClbReplaceCertForLbsState | undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["oldCertificateId"] = state ? state.oldCertificateId : undefined;
        } else {
            const args = argsOrState as ClbReplaceCertForLbsArgs | undefined;
            if ((!args || args.certificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificate'");
            }
            if ((!args || args.oldCertificateId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'oldCertificateId'");
            }
            resourceInputs["certificate"] = args ? args.certificate : undefined;
            resourceInputs["oldCertificateId"] = args ? args.oldCertificateId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClbReplaceCertForLbs.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClbReplaceCertForLbs resources.
 */
export interface ClbReplaceCertForLbsState {
    /**
     * Information such as the content of the new certificate.
     */
    certificate?: pulumi.Input<inputs.ClbReplaceCertForLbsCertificate>;
    /**
     * ID of the certificate to be replaced, which can be a server certificate or a client certificate.
     */
    oldCertificateId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ClbReplaceCertForLbs resource.
 */
export interface ClbReplaceCertForLbsArgs {
    /**
     * Information such as the content of the new certificate.
     */
    certificate: pulumi.Input<inputs.ClbReplaceCertForLbsCertificate>;
    /**
     * ID of the certificate to be replaced, which can be a server certificate or a client certificate.
     */
    oldCertificateId: pulumi.Input<string>;
}
