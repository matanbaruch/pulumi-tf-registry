// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ControllerConfig extends pulumi.CustomResource {
    /**
     * Get an existing ControllerConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ControllerConfigState, opts?: pulumi.CustomResourceOptions): ControllerConfig {
        return new ControllerConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aviatrix:index/controllerConfig:ControllerConfig';

    /**
     * Returns true if the given object is an instance of ControllerConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ControllerConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ControllerConfig.__pulumiType;
    }

    /**
     * Scanning Interval for AWS Guard Duty.
     */
    public readonly awsGuardDutyScanningInterval!: pulumi.Output<number | undefined>;
    /**
     * This parameter represents the name of a Cloud-Account in Aviatrix controller.
     */
    public readonly backupAccountName!: pulumi.Output<string | undefined>;
    /**
     * Bucket name. Required for AWS, AWSGov, GCP and OCI.
     */
    public readonly backupBucketName!: pulumi.Output<string | undefined>;
    /**
     * Type of cloud service provider, requires an integer value. Use 1 for AWS.
     */
    public readonly backupCloudType!: pulumi.Output<number | undefined>;
    /**
     * Switch to enable/disable controller cloudn backup config.
     */
    public readonly backupConfiguration!: pulumi.Output<boolean | undefined>;
    /**
     * Container name. Required for Azure.
     */
    public readonly backupContainerName!: pulumi.Output<string | undefined>;
    /**
     * Name of region. Required for Azure and OCI.
     */
    public readonly backupRegion!: pulumi.Output<string | undefined>;
    /**
     * Storage name. Required for Azure.
     */
    public readonly backupStorageName!: pulumi.Output<string | undefined>;
    /**
     * CA certificate file.
     */
    public readonly caCertificateFile!: pulumi.Output<string | undefined>;
    /**
     * File path to the CA certificate.
     */
    public readonly caCertificateFilePath!: pulumi.Output<string | undefined>;
    /**
     * Current version of the controller.
     */
    public /*out*/ readonly currentVersion!: pulumi.Output<string>;
    /**
     * Enable VPC/VNET DNS Server.
     */
    public readonly enableVpcDnsServer!: pulumi.Output<boolean | undefined>;
    /**
     * A system-wide mode. Default: true.
     */
    public readonly fqdnExceptionRule!: pulumi.Output<boolean | undefined>;
    /**
     * Switch for HTTP access. Default: false.
     *
     * @deprecated Deprecated
     */
    public readonly httpAccess!: pulumi.Output<boolean | undefined>;
    /**
     * If true, aviatrix.ControllerConfig will upgrade all gateways when target_version is set. If false, only the controller
     * will be upgraded when target_version is set. In that case gateway upgrades should be handled in each gateway resource
     * individually using the software_version and image_version attributes.
     */
    public readonly manageGatewayUpgrades!: pulumi.Output<boolean | undefined>;
    /**
     * Switch to enable the controller to backup up to a maximum of 3 rotating backups.
     */
    public readonly multipleBackups!: pulumi.Output<boolean | undefined>;
    /**
     * Previous version of the controller.
     */
    public /*out*/ readonly previousVersion!: pulumi.Output<string>;
    /**
     * Server private key file.
     */
    public readonly serverPrivateKeyFile!: pulumi.Output<string | undefined>;
    /**
     * File path to the server private key.
     */
    public readonly serverPrivateKeyFilePath!: pulumi.Output<string | undefined>;
    /**
     * Server public certificate file.
     */
    public readonly serverPublicCertificateFile!: pulumi.Output<string | undefined>;
    /**
     * File path to the server public certificate.
     */
    public readonly serverPublicCertificateFilePath!: pulumi.Output<string | undefined>;
    /**
     * The release version number to which the controller will be upgraded to.
     */
    public readonly targetVersion!: pulumi.Output<string | undefined>;
    /**
     * Current version of the controller without the build number.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a ControllerConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ControllerConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ControllerConfigArgs | ControllerConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ControllerConfigState | undefined;
            resourceInputs["awsGuardDutyScanningInterval"] = state ? state.awsGuardDutyScanningInterval : undefined;
            resourceInputs["backupAccountName"] = state ? state.backupAccountName : undefined;
            resourceInputs["backupBucketName"] = state ? state.backupBucketName : undefined;
            resourceInputs["backupCloudType"] = state ? state.backupCloudType : undefined;
            resourceInputs["backupConfiguration"] = state ? state.backupConfiguration : undefined;
            resourceInputs["backupContainerName"] = state ? state.backupContainerName : undefined;
            resourceInputs["backupRegion"] = state ? state.backupRegion : undefined;
            resourceInputs["backupStorageName"] = state ? state.backupStorageName : undefined;
            resourceInputs["caCertificateFile"] = state ? state.caCertificateFile : undefined;
            resourceInputs["caCertificateFilePath"] = state ? state.caCertificateFilePath : undefined;
            resourceInputs["currentVersion"] = state ? state.currentVersion : undefined;
            resourceInputs["enableVpcDnsServer"] = state ? state.enableVpcDnsServer : undefined;
            resourceInputs["fqdnExceptionRule"] = state ? state.fqdnExceptionRule : undefined;
            resourceInputs["httpAccess"] = state ? state.httpAccess : undefined;
            resourceInputs["manageGatewayUpgrades"] = state ? state.manageGatewayUpgrades : undefined;
            resourceInputs["multipleBackups"] = state ? state.multipleBackups : undefined;
            resourceInputs["previousVersion"] = state ? state.previousVersion : undefined;
            resourceInputs["serverPrivateKeyFile"] = state ? state.serverPrivateKeyFile : undefined;
            resourceInputs["serverPrivateKeyFilePath"] = state ? state.serverPrivateKeyFilePath : undefined;
            resourceInputs["serverPublicCertificateFile"] = state ? state.serverPublicCertificateFile : undefined;
            resourceInputs["serverPublicCertificateFilePath"] = state ? state.serverPublicCertificateFilePath : undefined;
            resourceInputs["targetVersion"] = state ? state.targetVersion : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as ControllerConfigArgs | undefined;
            resourceInputs["awsGuardDutyScanningInterval"] = args ? args.awsGuardDutyScanningInterval : undefined;
            resourceInputs["backupAccountName"] = args ? args.backupAccountName : undefined;
            resourceInputs["backupBucketName"] = args ? args.backupBucketName : undefined;
            resourceInputs["backupCloudType"] = args ? args.backupCloudType : undefined;
            resourceInputs["backupConfiguration"] = args ? args.backupConfiguration : undefined;
            resourceInputs["backupContainerName"] = args ? args.backupContainerName : undefined;
            resourceInputs["backupRegion"] = args ? args.backupRegion : undefined;
            resourceInputs["backupStorageName"] = args ? args.backupStorageName : undefined;
            resourceInputs["caCertificateFile"] = args?.caCertificateFile ? pulumi.secret(args.caCertificateFile) : undefined;
            resourceInputs["caCertificateFilePath"] = args ? args.caCertificateFilePath : undefined;
            resourceInputs["enableVpcDnsServer"] = args ? args.enableVpcDnsServer : undefined;
            resourceInputs["fqdnExceptionRule"] = args ? args.fqdnExceptionRule : undefined;
            resourceInputs["httpAccess"] = args ? args.httpAccess : undefined;
            resourceInputs["manageGatewayUpgrades"] = args ? args.manageGatewayUpgrades : undefined;
            resourceInputs["multipleBackups"] = args ? args.multipleBackups : undefined;
            resourceInputs["serverPrivateKeyFile"] = args?.serverPrivateKeyFile ? pulumi.secret(args.serverPrivateKeyFile) : undefined;
            resourceInputs["serverPrivateKeyFilePath"] = args ? args.serverPrivateKeyFilePath : undefined;
            resourceInputs["serverPublicCertificateFile"] = args?.serverPublicCertificateFile ? pulumi.secret(args.serverPublicCertificateFile) : undefined;
            resourceInputs["serverPublicCertificateFilePath"] = args ? args.serverPublicCertificateFilePath : undefined;
            resourceInputs["targetVersion"] = args ? args.targetVersion : undefined;
            resourceInputs["currentVersion"] = undefined /*out*/;
            resourceInputs["previousVersion"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["caCertificateFile", "serverPrivateKeyFile", "serverPublicCertificateFile"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ControllerConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ControllerConfig resources.
 */
export interface ControllerConfigState {
    /**
     * Scanning Interval for AWS Guard Duty.
     */
    awsGuardDutyScanningInterval?: pulumi.Input<number>;
    /**
     * This parameter represents the name of a Cloud-Account in Aviatrix controller.
     */
    backupAccountName?: pulumi.Input<string>;
    /**
     * Bucket name. Required for AWS, AWSGov, GCP and OCI.
     */
    backupBucketName?: pulumi.Input<string>;
    /**
     * Type of cloud service provider, requires an integer value. Use 1 for AWS.
     */
    backupCloudType?: pulumi.Input<number>;
    /**
     * Switch to enable/disable controller cloudn backup config.
     */
    backupConfiguration?: pulumi.Input<boolean>;
    /**
     * Container name. Required for Azure.
     */
    backupContainerName?: pulumi.Input<string>;
    /**
     * Name of region. Required for Azure and OCI.
     */
    backupRegion?: pulumi.Input<string>;
    /**
     * Storage name. Required for Azure.
     */
    backupStorageName?: pulumi.Input<string>;
    /**
     * CA certificate file.
     */
    caCertificateFile?: pulumi.Input<string>;
    /**
     * File path to the CA certificate.
     */
    caCertificateFilePath?: pulumi.Input<string>;
    /**
     * Current version of the controller.
     */
    currentVersion?: pulumi.Input<string>;
    /**
     * Enable VPC/VNET DNS Server.
     */
    enableVpcDnsServer?: pulumi.Input<boolean>;
    /**
     * A system-wide mode. Default: true.
     */
    fqdnExceptionRule?: pulumi.Input<boolean>;
    /**
     * Switch for HTTP access. Default: false.
     *
     * @deprecated Deprecated
     */
    httpAccess?: pulumi.Input<boolean>;
    /**
     * If true, aviatrix.ControllerConfig will upgrade all gateways when target_version is set. If false, only the controller
     * will be upgraded when target_version is set. In that case gateway upgrades should be handled in each gateway resource
     * individually using the software_version and image_version attributes.
     */
    manageGatewayUpgrades?: pulumi.Input<boolean>;
    /**
     * Switch to enable the controller to backup up to a maximum of 3 rotating backups.
     */
    multipleBackups?: pulumi.Input<boolean>;
    /**
     * Previous version of the controller.
     */
    previousVersion?: pulumi.Input<string>;
    /**
     * Server private key file.
     */
    serverPrivateKeyFile?: pulumi.Input<string>;
    /**
     * File path to the server private key.
     */
    serverPrivateKeyFilePath?: pulumi.Input<string>;
    /**
     * Server public certificate file.
     */
    serverPublicCertificateFile?: pulumi.Input<string>;
    /**
     * File path to the server public certificate.
     */
    serverPublicCertificateFilePath?: pulumi.Input<string>;
    /**
     * The release version number to which the controller will be upgraded to.
     */
    targetVersion?: pulumi.Input<string>;
    /**
     * Current version of the controller without the build number.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ControllerConfig resource.
 */
export interface ControllerConfigArgs {
    /**
     * Scanning Interval for AWS Guard Duty.
     */
    awsGuardDutyScanningInterval?: pulumi.Input<number>;
    /**
     * This parameter represents the name of a Cloud-Account in Aviatrix controller.
     */
    backupAccountName?: pulumi.Input<string>;
    /**
     * Bucket name. Required for AWS, AWSGov, GCP and OCI.
     */
    backupBucketName?: pulumi.Input<string>;
    /**
     * Type of cloud service provider, requires an integer value. Use 1 for AWS.
     */
    backupCloudType?: pulumi.Input<number>;
    /**
     * Switch to enable/disable controller cloudn backup config.
     */
    backupConfiguration?: pulumi.Input<boolean>;
    /**
     * Container name. Required for Azure.
     */
    backupContainerName?: pulumi.Input<string>;
    /**
     * Name of region. Required for Azure and OCI.
     */
    backupRegion?: pulumi.Input<string>;
    /**
     * Storage name. Required for Azure.
     */
    backupStorageName?: pulumi.Input<string>;
    /**
     * CA certificate file.
     */
    caCertificateFile?: pulumi.Input<string>;
    /**
     * File path to the CA certificate.
     */
    caCertificateFilePath?: pulumi.Input<string>;
    /**
     * Enable VPC/VNET DNS Server.
     */
    enableVpcDnsServer?: pulumi.Input<boolean>;
    /**
     * A system-wide mode. Default: true.
     */
    fqdnExceptionRule?: pulumi.Input<boolean>;
    /**
     * Switch for HTTP access. Default: false.
     *
     * @deprecated Deprecated
     */
    httpAccess?: pulumi.Input<boolean>;
    /**
     * If true, aviatrix.ControllerConfig will upgrade all gateways when target_version is set. If false, only the controller
     * will be upgraded when target_version is set. In that case gateway upgrades should be handled in each gateway resource
     * individually using the software_version and image_version attributes.
     */
    manageGatewayUpgrades?: pulumi.Input<boolean>;
    /**
     * Switch to enable the controller to backup up to a maximum of 3 rotating backups.
     */
    multipleBackups?: pulumi.Input<boolean>;
    /**
     * Server private key file.
     */
    serverPrivateKeyFile?: pulumi.Input<string>;
    /**
     * File path to the server private key.
     */
    serverPrivateKeyFilePath?: pulumi.Input<string>;
    /**
     * Server public certificate file.
     */
    serverPublicCertificateFile?: pulumi.Input<string>;
    /**
     * File path to the server public certificate.
     */
    serverPublicCertificateFilePath?: pulumi.Input<string>;
    /**
     * The release version number to which the controller will be upgraded to.
     */
    targetVersion?: pulumi.Input<string>;
}
