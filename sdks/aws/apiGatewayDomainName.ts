// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApiGatewayDomainName extends pulumi.CustomResource {
    /**
     * Get an existing ApiGatewayDomainName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiGatewayDomainNameState, opts?: pulumi.CustomResourceOptions): ApiGatewayDomainName {
        return new ApiGatewayDomainName(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apiGatewayDomainName:ApiGatewayDomainName';

    /**
     * Returns true if the given object is an instance of ApiGatewayDomainName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiGatewayDomainName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiGatewayDomainName.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly certificateArn!: pulumi.Output<string | undefined>;
    public readonly certificateBody!: pulumi.Output<string | undefined>;
    public readonly certificateChain!: pulumi.Output<string | undefined>;
    public readonly certificateName!: pulumi.Output<string | undefined>;
    public readonly certificatePrivateKey!: pulumi.Output<string | undefined>;
    public /*out*/ readonly certificateUploadDate!: pulumi.Output<string>;
    public /*out*/ readonly cloudfrontDomainName!: pulumi.Output<string>;
    public /*out*/ readonly cloudfrontZoneId!: pulumi.Output<string>;
    public readonly domainName!: pulumi.Output<string>;
    public readonly endpointConfiguration!: pulumi.Output<outputs.ApiGatewayDomainNameEndpointConfiguration | undefined>;
    public readonly mutualTlsAuthentication!: pulumi.Output<outputs.ApiGatewayDomainNameMutualTlsAuthentication | undefined>;
    public readonly ownershipVerificationCertificateArn!: pulumi.Output<string>;
    public readonly regionalCertificateArn!: pulumi.Output<string | undefined>;
    public readonly regionalCertificateName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly regionalDomainName!: pulumi.Output<string>;
    public /*out*/ readonly regionalZoneId!: pulumi.Output<string>;
    public readonly securityPolicy!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a ApiGatewayDomainName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiGatewayDomainNameArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApiGatewayDomainNameArgs | ApiGatewayDomainNameState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApiGatewayDomainNameState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["certificateArn"] = state ? state.certificateArn : undefined;
            resourceInputs["certificateBody"] = state ? state.certificateBody : undefined;
            resourceInputs["certificateChain"] = state ? state.certificateChain : undefined;
            resourceInputs["certificateName"] = state ? state.certificateName : undefined;
            resourceInputs["certificatePrivateKey"] = state ? state.certificatePrivateKey : undefined;
            resourceInputs["certificateUploadDate"] = state ? state.certificateUploadDate : undefined;
            resourceInputs["cloudfrontDomainName"] = state ? state.cloudfrontDomainName : undefined;
            resourceInputs["cloudfrontZoneId"] = state ? state.cloudfrontZoneId : undefined;
            resourceInputs["domainName"] = state ? state.domainName : undefined;
            resourceInputs["endpointConfiguration"] = state ? state.endpointConfiguration : undefined;
            resourceInputs["mutualTlsAuthentication"] = state ? state.mutualTlsAuthentication : undefined;
            resourceInputs["ownershipVerificationCertificateArn"] = state ? state.ownershipVerificationCertificateArn : undefined;
            resourceInputs["regionalCertificateArn"] = state ? state.regionalCertificateArn : undefined;
            resourceInputs["regionalCertificateName"] = state ? state.regionalCertificateName : undefined;
            resourceInputs["regionalDomainName"] = state ? state.regionalDomainName : undefined;
            resourceInputs["regionalZoneId"] = state ? state.regionalZoneId : undefined;
            resourceInputs["securityPolicy"] = state ? state.securityPolicy : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as ApiGatewayDomainNameArgs | undefined;
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            resourceInputs["certificateArn"] = args ? args.certificateArn : undefined;
            resourceInputs["certificateBody"] = args ? args.certificateBody : undefined;
            resourceInputs["certificateChain"] = args ? args.certificateChain : undefined;
            resourceInputs["certificateName"] = args ? args.certificateName : undefined;
            resourceInputs["certificatePrivateKey"] = args?.certificatePrivateKey ? pulumi.secret(args.certificatePrivateKey) : undefined;
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["endpointConfiguration"] = args ? args.endpointConfiguration : undefined;
            resourceInputs["mutualTlsAuthentication"] = args ? args.mutualTlsAuthentication : undefined;
            resourceInputs["ownershipVerificationCertificateArn"] = args ? args.ownershipVerificationCertificateArn : undefined;
            resourceInputs["regionalCertificateArn"] = args ? args.regionalCertificateArn : undefined;
            resourceInputs["regionalCertificateName"] = args ? args.regionalCertificateName : undefined;
            resourceInputs["securityPolicy"] = args ? args.securityPolicy : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["certificateUploadDate"] = undefined /*out*/;
            resourceInputs["cloudfrontDomainName"] = undefined /*out*/;
            resourceInputs["cloudfrontZoneId"] = undefined /*out*/;
            resourceInputs["regionalDomainName"] = undefined /*out*/;
            resourceInputs["regionalZoneId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["certificatePrivateKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ApiGatewayDomainName.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApiGatewayDomainName resources.
 */
export interface ApiGatewayDomainNameState {
    arn?: pulumi.Input<string>;
    certificateArn?: pulumi.Input<string>;
    certificateBody?: pulumi.Input<string>;
    certificateChain?: pulumi.Input<string>;
    certificateName?: pulumi.Input<string>;
    certificatePrivateKey?: pulumi.Input<string>;
    certificateUploadDate?: pulumi.Input<string>;
    cloudfrontDomainName?: pulumi.Input<string>;
    cloudfrontZoneId?: pulumi.Input<string>;
    domainName?: pulumi.Input<string>;
    endpointConfiguration?: pulumi.Input<inputs.ApiGatewayDomainNameEndpointConfiguration>;
    mutualTlsAuthentication?: pulumi.Input<inputs.ApiGatewayDomainNameMutualTlsAuthentication>;
    ownershipVerificationCertificateArn?: pulumi.Input<string>;
    regionalCertificateArn?: pulumi.Input<string>;
    regionalCertificateName?: pulumi.Input<string>;
    regionalDomainName?: pulumi.Input<string>;
    regionalZoneId?: pulumi.Input<string>;
    securityPolicy?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a ApiGatewayDomainName resource.
 */
export interface ApiGatewayDomainNameArgs {
    certificateArn?: pulumi.Input<string>;
    certificateBody?: pulumi.Input<string>;
    certificateChain?: pulumi.Input<string>;
    certificateName?: pulumi.Input<string>;
    certificatePrivateKey?: pulumi.Input<string>;
    domainName: pulumi.Input<string>;
    endpointConfiguration?: pulumi.Input<inputs.ApiGatewayDomainNameEndpointConfiguration>;
    mutualTlsAuthentication?: pulumi.Input<inputs.ApiGatewayDomainNameMutualTlsAuthentication>;
    ownershipVerificationCertificateArn?: pulumi.Input<string>;
    regionalCertificateArn?: pulumi.Input<string>;
    regionalCertificateName?: pulumi.Input<string>;
    securityPolicy?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
