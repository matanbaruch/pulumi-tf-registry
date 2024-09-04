// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeRegionSslCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ComputeRegionSslCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeRegionSslCertificateState, opts?: pulumi.CustomResourceOptions): ComputeRegionSslCertificate {
        return new ComputeRegionSslCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeRegionSslCertificate:ComputeRegionSslCertificate';

    /**
     * Returns true if the given object is an instance of ComputeRegionSslCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeRegionSslCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeRegionSslCertificate.__pulumiType;
    }

    /**
     * The certificate in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at
     * least one intermediate cert.
     */
    public readonly certificate!: pulumi.Output<string>;
    /**
     * The unique identifier for the resource.
     */
    public /*out*/ readonly certificateId!: pulumi.Output<number>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    public /*out*/ readonly creationTimestamp!: pulumi.Output<string>;
    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Expire time of the certificate in RFC3339 text format.
     */
    public /*out*/ readonly expireTime!: pulumi.Output<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash. These are in the same namespace as the managed SSL
     * certificates.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with name.
     */
    public readonly namePrefix!: pulumi.Output<string>;
    /**
     * The write-only private key in PEM format.
     */
    public readonly privateKey!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The Region in which the created regional ssl certificate should reside. If it is not provided, the provider region is
     * used.
     */
    public readonly region!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeRegionSslCertificateTimeouts | undefined>;

    /**
     * Create a ComputeRegionSslCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeRegionSslCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeRegionSslCertificateArgs | ComputeRegionSslCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeRegionSslCertificateState | undefined;
            resourceInputs["certificate"] = state ? state.certificate : undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["creationTimestamp"] = state ? state.creationTimestamp : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["expireTime"] = state ? state.expireTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["privateKey"] = state ? state.privateKey : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeRegionSslCertificateArgs | undefined;
            if ((!args || args.certificate === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificate'");
            }
            if ((!args || args.privateKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'privateKey'");
            }
            resourceInputs["certificate"] = args?.certificate ? pulumi.secret(args.certificate) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["privateKey"] = args?.privateKey ? pulumi.secret(args.privateKey) : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["certificateId"] = undefined /*out*/;
            resourceInputs["creationTimestamp"] = undefined /*out*/;
            resourceInputs["expireTime"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["certificate", "privateKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ComputeRegionSslCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeRegionSslCertificate resources.
 */
export interface ComputeRegionSslCertificateState {
    /**
     * The certificate in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at
     * least one intermediate cert.
     */
    certificate?: pulumi.Input<string>;
    /**
     * The unique identifier for the resource.
     */
    certificateId?: pulumi.Input<number>;
    /**
     * Creation timestamp in RFC3339 text format.
     */
    creationTimestamp?: pulumi.Input<string>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Expire time of the certificate in RFC3339 text format.
     */
    expireTime?: pulumi.Input<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash. These are in the same namespace as the managed SSL
     * certificates.
     */
    name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with name.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * The write-only private key in PEM format.
     */
    privateKey?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The Region in which the created regional ssl certificate should reside. If it is not provided, the provider region is
     * used.
     */
    region?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeRegionSslCertificateTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeRegionSslCertificate resource.
 */
export interface ComputeRegionSslCertificateArgs {
    /**
     * The certificate in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at
     * least one intermediate cert.
     */
    certificate: pulumi.Input<string>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and
     * comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression 'a-z?' which
     * means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or
     * digit, except the last character, which cannot be a dash. These are in the same namespace as the managed SSL
     * certificates.
     */
    name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified prefix. Conflicts with name.
     */
    namePrefix?: pulumi.Input<string>;
    /**
     * The write-only private key in PEM format.
     */
    privateKey: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The Region in which the created regional ssl certificate should reside. If it is not provided, the provider region is
     * used.
     */
    region?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeRegionSslCertificateTimeouts>;
}
