// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EnvironmentsAwsEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing EnvironmentsAwsEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentsAwsEnvironmentState, opts?: pulumi.CustomResourceOptions): EnvironmentsAwsEnvironment {
        return new EnvironmentsAwsEnvironment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cdp:index/environmentsAwsEnvironment:EnvironmentsAwsEnvironment';

    /**
     * Returns true if the given object is an instance of EnvironmentsAwsEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnvironmentsAwsEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnvironmentsAwsEnvironment.__pulumiType;
    }

    public readonly authentication!: pulumi.Output<outputs.EnvironmentsAwsEnvironmentAuthentication>;
    public readonly createPrivateSubnets!: pulumi.Output<boolean>;
    public readonly createServiceEndpoints!: pulumi.Output<boolean>;
    public readonly credentialName!: pulumi.Output<string>;
    public /*out*/ readonly crn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly enableTunnel!: pulumi.Output<boolean>;
    public readonly encryptionKeyArn!: pulumi.Output<string>;
    public readonly endpointAccessGatewayScheme!: pulumi.Output<string>;
    public readonly endpointAccessGatewaySubnetIds!: pulumi.Output<string[] | undefined>;
    public readonly environmentName!: pulumi.Output<string>;
    public readonly freeipa!: pulumi.Output<outputs.EnvironmentsAwsEnvironmentFreeipa>;
    public readonly logStorage!: pulumi.Output<outputs.EnvironmentsAwsEnvironmentLogStorage>;
    public readonly networkCidr!: pulumi.Output<string>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    public readonly pollingOptions!: pulumi.Output<outputs.EnvironmentsAwsEnvironmentPollingOptions | undefined>;
    public readonly proxyConfigName!: pulumi.Output<string>;
    public readonly region!: pulumi.Output<string>;
    public readonly reportDeploymentLogs!: pulumi.Output<boolean>;
    public readonly s3GuardTableName!: pulumi.Output<string>;
    public readonly securityAccess!: pulumi.Output<outputs.EnvironmentsAwsEnvironmentSecurityAccess>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly statusReason!: pulumi.Output<string>;
    public readonly subnetIds!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly tunnelType!: pulumi.Output<string>;
    public readonly vpcId!: pulumi.Output<string>;
    public readonly workloadAnalytics!: pulumi.Output<boolean>;

    /**
     * Create a EnvironmentsAwsEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentsAwsEnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentsAwsEnvironmentArgs | EnvironmentsAwsEnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnvironmentsAwsEnvironmentState | undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["createPrivateSubnets"] = state ? state.createPrivateSubnets : undefined;
            resourceInputs["createServiceEndpoints"] = state ? state.createServiceEndpoints : undefined;
            resourceInputs["credentialName"] = state ? state.credentialName : undefined;
            resourceInputs["crn"] = state ? state.crn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enableTunnel"] = state ? state.enableTunnel : undefined;
            resourceInputs["encryptionKeyArn"] = state ? state.encryptionKeyArn : undefined;
            resourceInputs["endpointAccessGatewayScheme"] = state ? state.endpointAccessGatewayScheme : undefined;
            resourceInputs["endpointAccessGatewaySubnetIds"] = state ? state.endpointAccessGatewaySubnetIds : undefined;
            resourceInputs["environmentName"] = state ? state.environmentName : undefined;
            resourceInputs["freeipa"] = state ? state.freeipa : undefined;
            resourceInputs["logStorage"] = state ? state.logStorage : undefined;
            resourceInputs["networkCidr"] = state ? state.networkCidr : undefined;
            resourceInputs["pollingOptions"] = state ? state.pollingOptions : undefined;
            resourceInputs["proxyConfigName"] = state ? state.proxyConfigName : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["reportDeploymentLogs"] = state ? state.reportDeploymentLogs : undefined;
            resourceInputs["s3GuardTableName"] = state ? state.s3GuardTableName : undefined;
            resourceInputs["securityAccess"] = state ? state.securityAccess : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["statusReason"] = state ? state.statusReason : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tunnelType"] = state ? state.tunnelType : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
            resourceInputs["workloadAnalytics"] = state ? state.workloadAnalytics : undefined;
        } else {
            const args = argsOrState as EnvironmentsAwsEnvironmentArgs | undefined;
            if ((!args || args.authentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authentication'");
            }
            if ((!args || args.credentialName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credentialName'");
            }
            if ((!args || args.environmentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'environmentName'");
            }
            if ((!args || args.logStorage === undefined) && !opts.urn) {
                throw new Error("Missing required property 'logStorage'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.securityAccess === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityAccess'");
            }
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["createPrivateSubnets"] = args ? args.createPrivateSubnets : undefined;
            resourceInputs["createServiceEndpoints"] = args ? args.createServiceEndpoints : undefined;
            resourceInputs["credentialName"] = args ? args.credentialName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enableTunnel"] = args ? args.enableTunnel : undefined;
            resourceInputs["encryptionKeyArn"] = args ? args.encryptionKeyArn : undefined;
            resourceInputs["endpointAccessGatewayScheme"] = args ? args.endpointAccessGatewayScheme : undefined;
            resourceInputs["endpointAccessGatewaySubnetIds"] = args ? args.endpointAccessGatewaySubnetIds : undefined;
            resourceInputs["environmentName"] = args ? args.environmentName : undefined;
            resourceInputs["freeipa"] = args ? args.freeipa : undefined;
            resourceInputs["logStorage"] = args ? args.logStorage : undefined;
            resourceInputs["networkCidr"] = args ? args.networkCidr : undefined;
            resourceInputs["pollingOptions"] = args ? args.pollingOptions : undefined;
            resourceInputs["proxyConfigName"] = args ? args.proxyConfigName : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["reportDeploymentLogs"] = args ? args.reportDeploymentLogs : undefined;
            resourceInputs["s3GuardTableName"] = args ? args.s3GuardTableName : undefined;
            resourceInputs["securityAccess"] = args ? args.securityAccess : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["workloadAnalytics"] = args ? args.workloadAnalytics : undefined;
            resourceInputs["crn"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusReason"] = undefined /*out*/;
            resourceInputs["tunnelType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnvironmentsAwsEnvironment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnvironmentsAwsEnvironment resources.
 */
export interface EnvironmentsAwsEnvironmentState {
    authentication?: pulumi.Input<inputs.EnvironmentsAwsEnvironmentAuthentication>;
    createPrivateSubnets?: pulumi.Input<boolean>;
    createServiceEndpoints?: pulumi.Input<boolean>;
    credentialName?: pulumi.Input<string>;
    crn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enableTunnel?: pulumi.Input<boolean>;
    encryptionKeyArn?: pulumi.Input<string>;
    endpointAccessGatewayScheme?: pulumi.Input<string>;
    endpointAccessGatewaySubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    environmentName?: pulumi.Input<string>;
    freeipa?: pulumi.Input<inputs.EnvironmentsAwsEnvironmentFreeipa>;
    logStorage?: pulumi.Input<inputs.EnvironmentsAwsEnvironmentLogStorage>;
    networkCidr?: pulumi.Input<string>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    pollingOptions?: pulumi.Input<inputs.EnvironmentsAwsEnvironmentPollingOptions>;
    proxyConfigName?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
    reportDeploymentLogs?: pulumi.Input<boolean>;
    s3GuardTableName?: pulumi.Input<string>;
    securityAccess?: pulumi.Input<inputs.EnvironmentsAwsEnvironmentSecurityAccess>;
    status?: pulumi.Input<string>;
    statusReason?: pulumi.Input<string>;
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tunnelType?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
    workloadAnalytics?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a EnvironmentsAwsEnvironment resource.
 */
export interface EnvironmentsAwsEnvironmentArgs {
    authentication: pulumi.Input<inputs.EnvironmentsAwsEnvironmentAuthentication>;
    createPrivateSubnets?: pulumi.Input<boolean>;
    createServiceEndpoints?: pulumi.Input<boolean>;
    credentialName: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    enableTunnel?: pulumi.Input<boolean>;
    encryptionKeyArn?: pulumi.Input<string>;
    endpointAccessGatewayScheme?: pulumi.Input<string>;
    endpointAccessGatewaySubnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    environmentName: pulumi.Input<string>;
    freeipa?: pulumi.Input<inputs.EnvironmentsAwsEnvironmentFreeipa>;
    logStorage: pulumi.Input<inputs.EnvironmentsAwsEnvironmentLogStorage>;
    networkCidr?: pulumi.Input<string>;
    /**
     * Polling related configuration options that could specify various values that will be used during CDP resource creation.
     */
    pollingOptions?: pulumi.Input<inputs.EnvironmentsAwsEnvironmentPollingOptions>;
    proxyConfigName?: pulumi.Input<string>;
    region: pulumi.Input<string>;
    reportDeploymentLogs?: pulumi.Input<boolean>;
    s3GuardTableName?: pulumi.Input<string>;
    securityAccess: pulumi.Input<inputs.EnvironmentsAwsEnvironmentSecurityAccess>;
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    vpcId?: pulumi.Input<string>;
    workloadAnalytics?: pulumi.Input<boolean>;
}
