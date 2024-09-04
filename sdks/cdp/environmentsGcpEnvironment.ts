// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EnvironmentsGcpEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentsGcpEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentsGcpEnvironmentState, opts?: pulumi.CustomResourceOptions): EnvironmentsGcpEnvironment {
        return new EnvironmentsGcpEnvironment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cdp:index/environmentsGcpEnvironment:EnvironmentsGcpEnvironment';

    /**
     * Returns true if the given object is an instance of EnvironmentsGcpEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnvironmentsGcpEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnvironmentsGcpEnvironment.__pulumiType;
    }

    /**
     * The zones of the environment in the given region. Multi-zone selection is not supported in GCP yet. It accepts only one
     * zone until support is added.
     */
    public readonly availabilityZones!: pulumi.Output<string[] | undefined>;
    /**
     * Name of the credential to use for the environment.
     */
    public readonly credentialName!: pulumi.Output<string>;
    /**
     * The CRN of the environment resource.
     */
    public /*out*/ readonly crn!: pulumi.Output<string>;
    /**
     * A description of the environment.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Whether to enable SSH tunneling for the environment.
     */
    public readonly enableTunnel!: pulumi.Output<boolean>;
    /**
     * Key Resource ID of the customer managed encryption key to encrypt GCP resources.
     */
    public readonly encryptionKey!: pulumi.Output<string>;
    /**
     * The scheme for the endpoint gateway. PUBLIC creates an external endpoint that can be accessed over the Internet.
     * Defaults to PRIVATE which restricts the traffic to be internal to the VPC.
     */
    public readonly endpointAccessGatewayScheme!: pulumi.Output<string | undefined>;
    /**
     * The name of the environment. Must contain only lowercase letters, numbers and hyphens.
     */
    public readonly environmentName!: pulumi.Output<string>;
    /**
     * Parameters needed to use an existing VPC and Subnets. For now only existing network params is supported.
     */
    public readonly existingNetworkParams!: pulumi.Output<outputs.EnvironmentsGcpEnvironmentExistingNetworkParams>;
    public readonly freeipa!: pulumi.Output<outputs.EnvironmentsGcpEnvironmentFreeipa>;
    /**
     * GCP storage configuration for cluster and audit logs.
     */
    public readonly logStorage!: pulumi.Output<outputs.EnvironmentsGcpEnvironmentLogStorage | undefined>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    public readonly pollingOptions!: pulumi.Output<outputs.EnvironmentsGcpEnvironmentPollingOptions | undefined>;
    /**
     * Name of the proxy config to use for the environment.
     */
    public readonly proxyConfigName!: pulumi.Output<string | undefined>;
    /**
     * Public SSH key string. The associated private key can be used to get root-level access to the Data Lake instance and
     * Data Hub cluster instances.
     */
    public readonly publicKey!: pulumi.Output<string>;
    /**
     * The region of the environment.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * When true, this will report additional diagnostic information back to Cloudera.
     */
    public readonly reportDeploymentLogs!: pulumi.Output<boolean>;
    /**
     * Firewall rules for FreeIPA, Data Lake and Data Hub deployment.
     */
    public readonly securityAccess!: pulumi.Output<outputs.EnvironmentsGcpEnvironmentSecurityAccess | undefined>;
    /**
     * The last known status for the environment.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * The last known detailed status reason for the environment.
     */
    public /*out*/ readonly statusReason!: pulumi.Output<string>;
    /**
     * Tags that can be attached to GCP resources. Please refer to Google documentation for the rules
     * https://cloud.google.com/compute/docs/labeling-resources#label_format.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    /**
     * Whether to associate public IPs to the resources within the network or not.
     */
    public readonly usePublicIp!: pulumi.Output<boolean>;
    /**
     * When this is enabled, diagnostic information about job and query execution is sent to Workload Manager for Data Hub
     * clusters created within this environment.
     */
    public readonly workloadAnalytics!: pulumi.Output<boolean>;

    /**
     * Create a EnvironmentsGcpEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentsGcpEnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentsGcpEnvironmentArgs | EnvironmentsGcpEnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnvironmentsGcpEnvironmentState | undefined;
            resourceInputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            resourceInputs["credentialName"] = state ? state.credentialName : undefined;
            resourceInputs["crn"] = state ? state.crn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enableTunnel"] = state ? state.enableTunnel : undefined;
            resourceInputs["encryptionKey"] = state ? state.encryptionKey : undefined;
            resourceInputs["endpointAccessGatewayScheme"] = state ? state.endpointAccessGatewayScheme : undefined;
            resourceInputs["environmentName"] = state ? state.environmentName : undefined;
            resourceInputs["existingNetworkParams"] = state ? state.existingNetworkParams : undefined;
            resourceInputs["freeipa"] = state ? state.freeipa : undefined;
            resourceInputs["logStorage"] = state ? state.logStorage : undefined;
            resourceInputs["pollingOptions"] = state ? state.pollingOptions : undefined;
            resourceInputs["proxyConfigName"] = state ? state.proxyConfigName : undefined;
            resourceInputs["publicKey"] = state ? state.publicKey : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["reportDeploymentLogs"] = state ? state.reportDeploymentLogs : undefined;
            resourceInputs["securityAccess"] = state ? state.securityAccess : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["statusReason"] = state ? state.statusReason : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["usePublicIp"] = state ? state.usePublicIp : undefined;
            resourceInputs["workloadAnalytics"] = state ? state.workloadAnalytics : undefined;
        } else {
            const args = argsOrState as EnvironmentsGcpEnvironmentArgs | undefined;
            if ((!args || args.credentialName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credentialName'");
            }
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.existingNetworkParams === undefined) && !opts.urn) {
                throw new Error("Missing required property 'existingNetworkParams'");
            }
            if ((!args || args.publicKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicKey'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.usePublicIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'usePublicIp'");
            }
            resourceInputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            resourceInputs["credentialName"] = args ? args.credentialName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enableTunnel"] = args ? args.enableTunnel : undefined;
            resourceInputs["encryptionKey"] = args ? args.encryptionKey : undefined;
            resourceInputs["endpointAccessGatewayScheme"] = args ? args.endpointAccessGatewayScheme : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["existingNetworkParams"] = args ? args.existingNetworkParams : undefined;
            resourceInputs["freeipa"] = args ? args.freeipa : undefined;
            resourceInputs["logStorage"] = args ? args.logStorage : undefined;
            resourceInputs["pollingOptions"] = args ? args.pollingOptions : undefined;
            resourceInputs["proxyConfigName"] = args ? args.proxyConfigName : undefined;
            resourceInputs["publicKey"] = args ? args.publicKey : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["reportDeploymentLogs"] = args ? args.reportDeploymentLogs : undefined;
            resourceInputs["securityAccess"] = args ? args.securityAccess : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["usePublicIp"] = args ? args.usePublicIp : undefined;
            resourceInputs["workloadAnalytics"] = args ? args.workloadAnalytics : undefined;
            resourceInputs["crn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusReason"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnvironmentsGcpEnvironment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnvironmentsGcpEnvironment resources.
 */
export interface EnvironmentsGcpEnvironmentState {
    /**
     * The zones of the environment in the given region. Multi-zone selection is not supported in GCP yet. It accepts only one
     * zone until support is added.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the credential to use for the environment.
     */
    credentialName?: pulumi.Input<string>;
    /**
     * The CRN of the environment resource.
     */
    crn?: pulumi.Input<string>;
    /**
     * A description of the environment.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether to enable SSH tunneling for the environment.
     */
    enableTunnel?: pulumi.Input<boolean>;
    /**
     * Key Resource ID of the customer managed encryption key to encrypt GCP resources.
     */
    encryptionKey?: pulumi.Input<string>;
    /**
     * The scheme for the endpoint gateway. PUBLIC creates an external endpoint that can be accessed over the Internet.
     * Defaults to PRIVATE which restricts the traffic to be internal to the VPC.
     */
    endpointAccessGatewayScheme?: pulumi.Input<string>;
    /**
     * The name of the environment. Must contain only lowercase letters, numbers and hyphens.
     */
    environmentName?: pulumi.Input<string>;
    /**
     * Parameters needed to use an existing VPC and Subnets. For now only existing network params is supported.
     */
    existingNetworkParams?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentExistingNetworkParams>;
    freeipa?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentFreeipa>;
    /**
     * GCP storage configuration for cluster and audit logs.
     */
    logStorage?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentLogStorage>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    pollingOptions?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentPollingOptions>;
    /**
     * Name of the proxy config to use for the environment.
     */
    proxyConfigName?: pulumi.Input<string>;
    /**
     * Public SSH key string. The associated private key can be used to get root-level access to the Data Lake instance and
     * Data Hub cluster instances.
     */
    publicKey?: pulumi.Input<string>;
    /**
     * The region of the environment.
     */
    region?: pulumi.Input<string>;
    /**
     * When true, this will report additional diagnostic information back to Cloudera.
     */
    reportDeploymentLogs?: pulumi.Input<boolean>;
    /**
     * Firewall rules for FreeIPA, Data Lake and Data Hub deployment.
     */
    securityAccess?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentSecurityAccess>;
    /**
     * The last known status for the environment.
     */
    status?: pulumi.Input<string>;
    /**
     * The last known detailed status reason for the environment.
     */
    statusReason?: pulumi.Input<string>;
    /**
     * Tags that can be attached to GCP resources. Please refer to Google documentation for the rules
     * https://cloud.google.com/compute/docs/labeling-resources#label_format.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether to associate public IPs to the resources within the network or not.
     */
    usePublicIp?: pulumi.Input<boolean>;
    /**
     * When this is enabled, diagnostic information about job and query execution is sent to Workload Manager for Data Hub
     * clusters created within this environment.
     */
    workloadAnalytics?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a EnvironmentsGcpEnvironment resource.
 */
export interface EnvironmentsGcpEnvironmentArgs {
    /**
     * The zones of the environment in the given region. Multi-zone selection is not supported in GCP yet. It accepts only one
     * zone until support is added.
     */
    availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the credential to use for the environment.
     */
    credentialName: pulumi.Input<string>;
    /**
     * A description of the environment.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether to enable SSH tunneling for the environment.
     */
    enableTunnel?: pulumi.Input<boolean>;
    /**
     * Key Resource ID of the customer managed encryption key to encrypt GCP resources.
     */
    encryptionKey?: pulumi.Input<string>;
    /**
     * The scheme for the endpoint gateway. PUBLIC creates an external endpoint that can be accessed over the Internet.
     * Defaults to PRIVATE which restricts the traffic to be internal to the VPC.
     */
    endpointAccessGatewayScheme?: pulumi.Input<string>;
    /**
     * The name of the environment. Must contain only lowercase letters, numbers and hyphens.
     */
    environmentName: pulumi.Input<string>;
    /**
     * Parameters needed to use an existing VPC and Subnets. For now only existing network params is supported.
     */
    existingNetworkParams: pulumi.Input<inputs.EnvironmentsGcpEnvironmentExistingNetworkParams>;
    freeipa?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentFreeipa>;
    /**
     * GCP storage configuration for cluster and audit logs.
     */
    logStorage?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentLogStorage>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    pollingOptions?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentPollingOptions>;
    /**
     * Name of the proxy config to use for the environment.
     */
    proxyConfigName?: pulumi.Input<string>;
    /**
     * Public SSH key string. The associated private key can be used to get root-level access to the Data Lake instance and
     * Data Hub cluster instances.
     */
    publicKey: pulumi.Input<string>;
    /**
     * The region of the environment.
     */
    region: pulumi.Input<string>;
    /**
     * When true, this will report additional diagnostic information back to Cloudera.
     */
    reportDeploymentLogs?: pulumi.Input<boolean>;
    /**
     * Firewall rules for FreeIPA, Data Lake and Data Hub deployment.
     */
    securityAccess?: pulumi.Input<inputs.EnvironmentsGcpEnvironmentSecurityAccess>;
    /**
     * Tags that can be attached to GCP resources. Please refer to Google documentation for the rules
     * https://cloud.google.com/compute/docs/labeling-resources#label_format.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Whether to associate public IPs to the resources within the network or not.
     */
    usePublicIp: pulumi.Input<boolean>;
    /**
     * When this is enabled, diagnostic information about job and query execution is sent to Workload Manager for Data Hub
     * clusters created within this environment.
     */
    workloadAnalytics?: pulumi.Input<boolean>;
}
