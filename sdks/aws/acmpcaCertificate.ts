// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AcmpcaCertificate extends pulumi.CustomResource {
    /**
     * Get an existing AcmpcaCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AcmpcaCertificateState, opts?: pulumi.CustomResourceOptions): AcmpcaCertificate {
        return new AcmpcaCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/acmpcaCertificate:AcmpcaCertificate';

    /**
     * Returns true if the given object is an instance of AcmpcaCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AcmpcaCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AcmpcaCertificate.__pulumiType;
    }

    public readonly apiPassthrough!: pulumi.Output<string | undefined>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly certificate!: pulumi.Output<string>;
    public readonly certificateAuthorityArn!: pulumi.Output<string>;
    public /*out*/ readonly certificateChain!: pulumi.Output<string>;
    public readonly certificateSigningRequest!: pulumi.Output<string>;
    public readonly signingAlgorithm!: pulumi.Output<string>;
    public readonly templateArn!: pulumi.Output<string | undefined>;
    public readonly validity!: pulumi.Output<outputs.AcmpcaCertificateValidity>;

    /**
     * Create a AcmpcaCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AcmpcaCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AcmpcaCertificateArgs | AcmpcaCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AcmpcaCertificateState | undefined;
            resourceInputs["apiPassthrough"] = state ? state.apiPassthrough : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["certificateAuthorityArn"] = state ? state.certificateAuthorityArn : undefined;
            resourceInputs["certificateChain"] = state ? state.certificateChain : undefined;
            resourceInputs["certificateSigningRequest"] = state ? state.certificateSigningRequest : undefined;
            resourceInputs["signingAlgorithm"] = state ? state.signingAlgorithm : undefined;
            resourceInputs["templateArn"] = state ? state.templateArn : undefined;
            resourceInputs["validity"] = state ? state.validity : undefined;
        } else {
            const args = argsOrState as AcmpcaCertificateArgs | undefined;
            if ((!args || args.certificateAuthorityArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateAuthorityArn'");
            }
            if ((!args || args.certificateSigningRequest === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateSigningRequest'");
            }
            if ((!args || args.signingAlgorithm === undefined) && !opts.urn) {
                throw new Error("Missing required property 'signingAlgorithm'");
            }
            if ((!args || args.validity === undefined) && !opts.urn) {
                throw new Error("Missing required property 'validity'");
            }
            resourceInputs["apiPassthrough"] = args ? args.apiPassthrough : undefined;
            resourceInputs["certificateAuthorityArn"] = args ? args.certificateAuthorityArn : undefined;
            resourceInputs["certificateSigningRequest"] = args ? args.certificateSigningRequest : undefined;
            resourceInputs["signingAlgorithm"] = args ? args.signingAlgorithm : undefined;
            resourceInputs["templateArn"] = args ? args.templateArn : undefined;
            resourceInputs["validity"] = args ? args.validity : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["certificate"] = undefined /*out*/;
            resourceInputs["certificateChain"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AcmpcaCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AcmpcaCertificate resources.
 */
export interface AcmpcaCertificateState {
    apiPassthrough?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    certificate?: pulumi.Input<string>;
    certificateAuthorityArn?: pulumi.Input<string>;
    certificateChain?: pulumi.Input<string>;
    certificateSigningRequest?: pulumi.Input<string>;
    signingAlgorithm?: pulumi.Input<string>;
    templateArn?: pulumi.Input<string>;
    validity?: pulumi.Input<inputs.AcmpcaCertificateValidity>;
}

/**
 * The set of arguments for constructing a AcmpcaCertificate resource.
 */
export interface AcmpcaCertificateArgs {
    apiPassthrough?: pulumi.Input<string>;
    certificateAuthorityArn: pulumi.Input<string>;
    certificateSigningRequest: pulumi.Input<string>;
    signingAlgorithm: pulumi.Input<string>;
    templateArn?: pulumi.Input<string>;
    validity: pulumi.Input<inputs.AcmpcaCertificateValidity>;
}
