// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VerifiedaccessEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing VerifiedaccessEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VerifiedaccessEndpointState, opts?: pulumi.CustomResourceOptions): VerifiedaccessEndpoint {
        return new VerifiedaccessEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/verifiedaccessEndpoint:VerifiedaccessEndpoint';

    /**
     * Returns true if the given object is an instance of VerifiedaccessEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VerifiedaccessEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VerifiedaccessEndpoint.__pulumiType;
    }

    public readonly applicationDomain!: pulumi.Output<string>;
    public readonly attachmentType!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly deviceValidationDomain!: pulumi.Output<string>;
    public readonly domainCertificateArn!: pulumi.Output<string>;
    public /*out*/ readonly endpointDomain!: pulumi.Output<string>;
    public readonly endpointDomainPrefix!: pulumi.Output<string>;
    public readonly endpointType!: pulumi.Output<string>;
    public readonly loadBalancerOptions!: pulumi.Output<outputs.VerifiedaccessEndpointLoadBalancerOptions | undefined>;
    public readonly networkInterfaceOptions!: pulumi.Output<outputs.VerifiedaccessEndpointNetworkInterfaceOptions | undefined>;
    public readonly policyDocument!: pulumi.Output<string | undefined>;
    public readonly securityGroupIds!: pulumi.Output<string[] | undefined>;
    public readonly sseSpecification!: pulumi.Output<outputs.VerifiedaccessEndpointSseSpecification | undefined>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.VerifiedaccessEndpointTimeouts | undefined>;
    public readonly verifiedAccessGroupId!: pulumi.Output<string>;
    public /*out*/ readonly verifiedAccessInstanceId!: pulumi.Output<string>;

    /**
     * Create a VerifiedaccessEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VerifiedaccessEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VerifiedaccessEndpointArgs | VerifiedaccessEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VerifiedaccessEndpointState | undefined;
            resourceInputs["applicationDomain"] = state ? state.applicationDomain : undefined;
            resourceInputs["attachmentType"] = state ? state.attachmentType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceValidationDomain"] = state ? state.deviceValidationDomain : undefined;
            resourceInputs["domainCertificateArn"] = state ? state.domainCertificateArn : undefined;
            resourceInputs["endpointDomain"] = state ? state.endpointDomain : undefined;
            resourceInputs["endpointDomainPrefix"] = state ? state.endpointDomainPrefix : undefined;
            resourceInputs["endpointType"] = state ? state.endpointType : undefined;
            resourceInputs["loadBalancerOptions"] = state ? state.loadBalancerOptions : undefined;
            resourceInputs["networkInterfaceOptions"] = state ? state.networkInterfaceOptions : undefined;
            resourceInputs["policyDocument"] = state ? state.policyDocument : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["sseSpecification"] = state ? state.sseSpecification : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["verifiedAccessGroupId"] = state ? state.verifiedAccessGroupId : undefined;
            resourceInputs["verifiedAccessInstanceId"] = state ? state.verifiedAccessInstanceId : undefined;
        } else {
            const args = argsOrState as VerifiedaccessEndpointArgs | undefined;
            if ((!args || args.applicationDomain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationDomain'");
            }
            if ((!args || args.attachmentType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attachmentType'");
            }
            if ((!args || args.domainCertificateArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainCertificateArn'");
            }
            if ((!args || args.endpointDomainPrefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointDomainPrefix'");
            }
            if ((!args || args.endpointType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'endpointType'");
            }
            if ((!args || args.verifiedAccessGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'verifiedAccessGroupId'");
            }
            resourceInputs["applicationDomain"] = args ? args.applicationDomain : undefined;
            resourceInputs["attachmentType"] = args ? args.attachmentType : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["domainCertificateArn"] = args ? args.domainCertificateArn : undefined;
            resourceInputs["endpointDomainPrefix"] = args ? args.endpointDomainPrefix : undefined;
            resourceInputs["endpointType"] = args ? args.endpointType : undefined;
            resourceInputs["loadBalancerOptions"] = args ? args.loadBalancerOptions : undefined;
            resourceInputs["networkInterfaceOptions"] = args ? args.networkInterfaceOptions : undefined;
            resourceInputs["policyDocument"] = args ? args.policyDocument : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["sseSpecification"] = args ? args.sseSpecification : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["verifiedAccessGroupId"] = args ? args.verifiedAccessGroupId : undefined;
            resourceInputs["deviceValidationDomain"] = undefined /*out*/;
            resourceInputs["endpointDomain"] = undefined /*out*/;
            resourceInputs["verifiedAccessInstanceId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VerifiedaccessEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VerifiedaccessEndpoint resources.
 */
export interface VerifiedaccessEndpointState {
    applicationDomain?: pulumi.Input<string>;
    attachmentType?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceValidationDomain?: pulumi.Input<string>;
    domainCertificateArn?: pulumi.Input<string>;
    endpointDomain?: pulumi.Input<string>;
    endpointDomainPrefix?: pulumi.Input<string>;
    endpointType?: pulumi.Input<string>;
    loadBalancerOptions?: pulumi.Input<inputs.VerifiedaccessEndpointLoadBalancerOptions>;
    networkInterfaceOptions?: pulumi.Input<inputs.VerifiedaccessEndpointNetworkInterfaceOptions>;
    policyDocument?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    sseSpecification?: pulumi.Input<inputs.VerifiedaccessEndpointSseSpecification>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VerifiedaccessEndpointTimeouts>;
    verifiedAccessGroupId?: pulumi.Input<string>;
    verifiedAccessInstanceId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VerifiedaccessEndpoint resource.
 */
export interface VerifiedaccessEndpointArgs {
    applicationDomain: pulumi.Input<string>;
    attachmentType: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    domainCertificateArn: pulumi.Input<string>;
    endpointDomainPrefix: pulumi.Input<string>;
    endpointType: pulumi.Input<string>;
    loadBalancerOptions?: pulumi.Input<inputs.VerifiedaccessEndpointLoadBalancerOptions>;
    networkInterfaceOptions?: pulumi.Input<inputs.VerifiedaccessEndpointNetworkInterfaceOptions>;
    policyDocument?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    sseSpecification?: pulumi.Input<inputs.VerifiedaccessEndpointSseSpecification>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.VerifiedaccessEndpointTimeouts>;
    verifiedAccessGroupId: pulumi.Input<string>;
}
