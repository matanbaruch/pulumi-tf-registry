// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApprunnerService extends pulumi.CustomResource {
    /**
     * Get an existing ApprunnerService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApprunnerServiceState, opts?: pulumi.CustomResourceOptions): ApprunnerService {
        return new ApprunnerService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/apprunnerService:ApprunnerService';

    /**
     * Returns true if the given object is an instance of ApprunnerService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApprunnerService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApprunnerService.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly autoScalingConfigurationArn!: pulumi.Output<string>;
    public readonly encryptionConfiguration!: pulumi.Output<outputs.ApprunnerServiceEncryptionConfiguration | undefined>;
    public readonly healthCheckConfiguration!: pulumi.Output<outputs.ApprunnerServiceHealthCheckConfiguration | undefined>;
    public readonly instanceConfiguration!: pulumi.Output<outputs.ApprunnerServiceInstanceConfiguration | undefined>;
    public readonly networkConfiguration!: pulumi.Output<outputs.ApprunnerServiceNetworkConfiguration | undefined>;
    public readonly observabilityConfiguration!: pulumi.Output<outputs.ApprunnerServiceObservabilityConfiguration | undefined>;
    public /*out*/ readonly serviceId!: pulumi.Output<string>;
    public readonly serviceName!: pulumi.Output<string>;
    public /*out*/ readonly serviceUrl!: pulumi.Output<string>;
    public readonly sourceConfiguration!: pulumi.Output<outputs.ApprunnerServiceSourceConfiguration>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a ApprunnerService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApprunnerServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApprunnerServiceArgs | ApprunnerServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApprunnerServiceState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["autoScalingConfigurationArn"] = state ? state.autoScalingConfigurationArn : undefined;
            resourceInputs["encryptionConfiguration"] = state ? state.encryptionConfiguration : undefined;
            resourceInputs["healthCheckConfiguration"] = state ? state.healthCheckConfiguration : undefined;
            resourceInputs["instanceConfiguration"] = state ? state.instanceConfiguration : undefined;
            resourceInputs["networkConfiguration"] = state ? state.networkConfiguration : undefined;
            resourceInputs["observabilityConfiguration"] = state ? state.observabilityConfiguration : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["serviceUrl"] = state ? state.serviceUrl : undefined;
            resourceInputs["sourceConfiguration"] = state ? state.sourceConfiguration : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as ApprunnerServiceArgs | undefined;
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.sourceConfiguration === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceConfiguration'");
            }
            resourceInputs["autoScalingConfigurationArn"] = args ? args.autoScalingConfigurationArn : undefined;
            resourceInputs["encryptionConfiguration"] = args ? args.encryptionConfiguration : undefined;
            resourceInputs["healthCheckConfiguration"] = args ? args.healthCheckConfiguration : undefined;
            resourceInputs["instanceConfiguration"] = args ? args.instanceConfiguration : undefined;
            resourceInputs["networkConfiguration"] = args ? args.networkConfiguration : undefined;
            resourceInputs["observabilityConfiguration"] = args ? args.observabilityConfiguration : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["sourceConfiguration"] = args ? args.sourceConfiguration : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["serviceId"] = undefined /*out*/;
            resourceInputs["serviceUrl"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApprunnerService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApprunnerService resources.
 */
export interface ApprunnerServiceState {
    arn?: pulumi.Input<string>;
    autoScalingConfigurationArn?: pulumi.Input<string>;
    encryptionConfiguration?: pulumi.Input<inputs.ApprunnerServiceEncryptionConfiguration>;
    healthCheckConfiguration?: pulumi.Input<inputs.ApprunnerServiceHealthCheckConfiguration>;
    instanceConfiguration?: pulumi.Input<inputs.ApprunnerServiceInstanceConfiguration>;
    networkConfiguration?: pulumi.Input<inputs.ApprunnerServiceNetworkConfiguration>;
    observabilityConfiguration?: pulumi.Input<inputs.ApprunnerServiceObservabilityConfiguration>;
    serviceId?: pulumi.Input<string>;
    serviceName?: pulumi.Input<string>;
    serviceUrl?: pulumi.Input<string>;
    sourceConfiguration?: pulumi.Input<inputs.ApprunnerServiceSourceConfiguration>;
    status?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a ApprunnerService resource.
 */
export interface ApprunnerServiceArgs {
    autoScalingConfigurationArn?: pulumi.Input<string>;
    encryptionConfiguration?: pulumi.Input<inputs.ApprunnerServiceEncryptionConfiguration>;
    healthCheckConfiguration?: pulumi.Input<inputs.ApprunnerServiceHealthCheckConfiguration>;
    instanceConfiguration?: pulumi.Input<inputs.ApprunnerServiceInstanceConfiguration>;
    networkConfiguration?: pulumi.Input<inputs.ApprunnerServiceNetworkConfiguration>;
    observabilityConfiguration?: pulumi.Input<inputs.ApprunnerServiceObservabilityConfiguration>;
    serviceName: pulumi.Input<string>;
    sourceConfiguration: pulumi.Input<inputs.ApprunnerServiceSourceConfiguration>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
