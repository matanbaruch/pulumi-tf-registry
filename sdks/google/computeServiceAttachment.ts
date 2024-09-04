// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputeServiceAttachment extends pulumi.CustomResource {
    /**
     * Get an existing ComputeServiceAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeServiceAttachmentState, opts?: pulumi.CustomResourceOptions): ComputeServiceAttachment {
        return new ComputeServiceAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computeServiceAttachment:ComputeServiceAttachment';

    /**
     * Returns true if the given object is an instance of ComputeServiceAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputeServiceAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputeServiceAttachment.__pulumiType;
    }

    /**
     * An array of the consumer forwarding rules connected to this service attachment.
     */
    public /*out*/ readonly connectedEndpoints!: pulumi.Output<outputs.ComputeServiceAttachmentConnectedEndpoint[]>;
    /**
     * The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
     */
    public readonly connectionPreference!: pulumi.Output<string>;
    /**
     * An array of projects that are allowed to connect to this service attachment.
     */
    public readonly consumerAcceptLists!: pulumi.Output<outputs.ComputeServiceAttachmentConsumerAcceptList[] | undefined>;
    /**
     * An array of projects that are not allowed to connect to this service attachment.
     */
    public readonly consumerRejectLists!: pulumi.Output<string[] | undefined>;
    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.
     * For example, this is a valid domain name: "p.mycompany.com.". Current max number of domain names supported is 1.
     */
    public readonly domainNames!: pulumi.Output<string[] | undefined>;
    /**
     * If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse
     * proxies on their way to destination servers.
     */
    public readonly enableProxyProtocol!: pulumi.Output<boolean>;
    /**
     * Fingerprint of this resource. This field is used internally during updates of this resource.
     */
    public /*out*/ readonly fingerprint!: pulumi.Output<string>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * An array of subnets that is provided for NAT in this service attachment.
     */
    public readonly natSubnets!: pulumi.Output<string[]>;
    public readonly project!: pulumi.Output<string>;
    /**
     * This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or
     * REJECTED PSC endpoints. If false, connection policy update will only affect existing PENDING PSC endpoints. Existing
     * ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified . If true, update
     * will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to
     * REJECTED if its project is added to the reject list.
     */
    public readonly reconcileConnections!: pulumi.Output<boolean>;
    /**
     * URL of the region where the resource resides.
     */
    public readonly region!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * The URL of a service serving the endpoint identified by this service attachment.
     */
    public readonly targetService!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputeServiceAttachmentTimeouts | undefined>;

    /**
     * Create a ComputeServiceAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeServiceAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputeServiceAttachmentArgs | ComputeServiceAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputeServiceAttachmentState | undefined;
            resourceInputs["connectedEndpoints"] = state ? state.connectedEndpoints : undefined;
            resourceInputs["connectionPreference"] = state ? state.connectionPreference : undefined;
            resourceInputs["consumerAcceptLists"] = state ? state.consumerAcceptLists : undefined;
            resourceInputs["consumerRejectLists"] = state ? state.consumerRejectLists : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["domainNames"] = state ? state.domainNames : undefined;
            resourceInputs["enableProxyProtocol"] = state ? state.enableProxyProtocol : undefined;
            resourceInputs["fingerprint"] = state ? state.fingerprint : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["natSubnets"] = state ? state.natSubnets : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["reconcileConnections"] = state ? state.reconcileConnections : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["targetService"] = state ? state.targetService : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputeServiceAttachmentArgs | undefined;
            if ((!args || args.connectionPreference === undefined) && !opts.urn) {
                throw new Error("Missing required property 'connectionPreference'");
            }
            if ((!args || args.enableProxyProtocol === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enableProxyProtocol'");
            }
            if ((!args || args.natSubnets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'natSubnets'");
            }
            if ((!args || args.targetService === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetService'");
            }
            resourceInputs["connectionPreference"] = args ? args.connectionPreference : undefined;
            resourceInputs["consumerAcceptLists"] = args ? args.consumerAcceptLists : undefined;
            resourceInputs["consumerRejectLists"] = args ? args.consumerRejectLists : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["domainNames"] = args ? args.domainNames : undefined;
            resourceInputs["enableProxyProtocol"] = args ? args.enableProxyProtocol : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["natSubnets"] = args ? args.natSubnets : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["reconcileConnections"] = args ? args.reconcileConnections : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["targetService"] = args ? args.targetService : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["connectedEndpoints"] = undefined /*out*/;
            resourceInputs["fingerprint"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputeServiceAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputeServiceAttachment resources.
 */
export interface ComputeServiceAttachmentState {
    /**
     * An array of the consumer forwarding rules connected to this service attachment.
     */
    connectedEndpoints?: pulumi.Input<pulumi.Input<inputs.ComputeServiceAttachmentConnectedEndpoint>[]>;
    /**
     * The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
     */
    connectionPreference?: pulumi.Input<string>;
    /**
     * An array of projects that are allowed to connect to this service attachment.
     */
    consumerAcceptLists?: pulumi.Input<pulumi.Input<inputs.ComputeServiceAttachmentConsumerAcceptList>[]>;
    /**
     * An array of projects that are not allowed to connect to this service attachment.
     */
    consumerRejectLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.
     * For example, this is a valid domain name: "p.mycompany.com.". Current max number of domain names supported is 1.
     */
    domainNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse
     * proxies on their way to destination servers.
     */
    enableProxyProtocol?: pulumi.Input<boolean>;
    /**
     * Fingerprint of this resource. This field is used internally during updates of this resource.
     */
    fingerprint?: pulumi.Input<string>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of subnets that is provided for NAT in this service attachment.
     */
    natSubnets?: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    /**
     * This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or
     * REJECTED PSC endpoints. If false, connection policy update will only affect existing PENDING PSC endpoints. Existing
     * ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified . If true, update
     * will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to
     * REJECTED if its project is added to the reject list.
     */
    reconcileConnections?: pulumi.Input<boolean>;
    /**
     * URL of the region where the resource resides.
     */
    region?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    /**
     * The URL of a service serving the endpoint identified by this service attachment.
     */
    targetService?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeServiceAttachmentTimeouts>;
}

/**
 * The set of arguments for constructing a ComputeServiceAttachment resource.
 */
export interface ComputeServiceAttachmentArgs {
    /**
     * The connection preference to use for this service attachment. Valid values include "ACCEPT_AUTOMATIC", "ACCEPT_MANUAL".
     */
    connectionPreference: pulumi.Input<string>;
    /**
     * An array of projects that are allowed to connect to this service attachment.
     */
    consumerAcceptLists?: pulumi.Input<pulumi.Input<inputs.ComputeServiceAttachmentConsumerAcceptList>[]>;
    /**
     * An array of projects that are not allowed to connect to this service attachment.
     */
    consumerRejectLists?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * If specified, the domain name will be used during the integration between the PSC connected endpoints and the Cloud DNS.
     * For example, this is a valid domain name: "p.mycompany.com.". Current max number of domain names supported is 1.
     */
    domainNames?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * If true, enable the proxy protocol which is for supplying client TCP/IP address data in TCP connections that traverse
     * proxies on their way to destination servers.
     */
    enableProxyProtocol: pulumi.Input<boolean>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    name?: pulumi.Input<string>;
    /**
     * An array of subnets that is provided for NAT in this service attachment.
     */
    natSubnets: pulumi.Input<pulumi.Input<string>[]>;
    project?: pulumi.Input<string>;
    /**
     * This flag determines whether a consumer accept/reject list change can reconcile the statuses of existing ACCEPTED or
     * REJECTED PSC endpoints. If false, connection policy update will only affect existing PENDING PSC endpoints. Existing
     * ACCEPTED/REJECTED endpoints will remain untouched regardless how the connection policy is modified . If true, update
     * will affect both PENDING and ACCEPTED/REJECTED PSC endpoints. For example, an ACCEPTED PSC endpoint will be moved to
     * REJECTED if its project is added to the reject list.
     */
    reconcileConnections?: pulumi.Input<boolean>;
    /**
     * URL of the region where the resource resides.
     */
    region?: pulumi.Input<string>;
    /**
     * The URL of a service serving the endpoint identified by this service attachment.
     */
    targetService: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputeServiceAttachmentTimeouts>;
}
