// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LambdaFunction extends pulumi.CustomResource {
    /**
     * Get an existing LambdaFunction resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LambdaFunctionState, opts?: pulumi.CustomResourceOptions): LambdaFunction {
        return new LambdaFunction(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/lambdaFunction:LambdaFunction';

    /**
     * Returns true if the given object is an instance of LambdaFunction.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LambdaFunction {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LambdaFunction.__pulumiType;
    }

    /**
     * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or
     * x86_64). The default value is ``x86_64``.
     */
    public readonly architectures!: pulumi.Output<string[]>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The code for the function.
     */
    public readonly code!: pulumi.Output<outputs.LambdaFunctionCode>;
    /**
     * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration
     * includes a set of signing profiles, which define the trusted publishers for this function.
     */
    public readonly codeSigningConfigArn!: pulumi.Output<string>;
    /**
     * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they
     * fail processing. For more information, see [Dead-letter
     * queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
     */
    public readonly deadLetterConfig!: pulumi.Output<outputs.LambdaFunctionDeadLetterConfig>;
    /**
     * A description of the function.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Environment variables that are accessible from function code during execution.
     */
    public readonly environment!: pulumi.Output<outputs.LambdaFunctionEnvironment>;
    /**
     * The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between
     * 512 and 10,240 MB.
     */
    public readonly ephemeralStorage!: pulumi.Output<outputs.LambdaFunctionEphemeralStorage>;
    /**
     * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be
     * available in every Availability Zone that your function connects to. If your template contains an
     * [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html)
     * resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before
     * the function. For more information about using the ``DependsOn`` attribute, see [DependsOn
     * Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
     */
    public readonly fileSystemConfigs!: pulumi.Output<outputs.LambdaFunctionFileSystemConfig[]>;
    /**
     * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one. If you
     * specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that
     * require no or some interruption. If you must replace the resource, specify a new name.
     */
    public readonly functionName!: pulumi.Output<string>;
    /**
     * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment
     * package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers,
     * depending on the runtime. For more information, see [Lambda programming
     * model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
     */
    public readonly handler!: pulumi.Output<string>;
    /**
     * Configuration values that override the container image Dockerfile settings. For more information, see [Container image
     * settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
     */
    public readonly imageConfig!: pulumi.Output<outputs.LambdaFunctionImageConfig>;
    /**
     * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's [environment
     * variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
     * When [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) is activated, Lambda also
     * uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also
     * uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect
     * your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key,
     * Lambda uses a default service key.
     */
    public readonly kmsKeyArn!: pulumi.Output<string>;
    /**
     * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the
     * function's execution environment. Specify each layer by its ARN, including the version.
     */
    public readonly layers!: pulumi.Output<string[]>;
    /**
     * The function's Amazon CloudWatch Logs configuration settings.
     */
    public readonly loggingConfig!: pulumi.Output<outputs.LambdaFunctionLoggingConfig>;
    /**
     * The amount of [memory available to the
     * function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console)
     * at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can
     * be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas
     * automatically based on your usage. You can also request a quota increase.
     */
    public readonly memorySize!: pulumi.Output<number>;
    /**
     * The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
     */
    public readonly packageType!: pulumi.Output<string>;
    /**
     * The function recursion configuration.
     */
    public readonly recursiveLoop!: pulumi.Output<string>;
    /**
     * The number of simultaneous executions to reserve for the function.
     */
    public readonly reservedConcurrentExecutions!: pulumi.Output<number>;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime
     * is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're
     * deploying a function using a container image. The following list includes deprecated runtimes. Lambda blocks creating
     * new functions and updating existing functions shortly after each runtime is deprecated. For more information, see
     * [Runtime use after
     * deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels). For a list
     * of all currently supported runtimes, see [Supported
     * runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
     */
    public readonly runtime!: pulumi.Output<string>;
    /**
     * Sets the runtime management configuration for a function's version. For more information, see [Runtime
     * updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
     */
    public readonly runtimeManagementConfig!: pulumi.Output<outputs.LambdaFunctionRuntimeManagementConfig>;
    /**
     * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     */
    public readonly snapStart!: pulumi.Output<outputs.LambdaFunctionSnapStart>;
    /**
     * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     */
    public /*out*/ readonly snapStartResponse!: pulumi.Output<outputs.LambdaFunctionSnapStartResponse>;
    /**
     * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
     */
    public readonly tags!: pulumi.Output<outputs.LambdaFunctionTag[]>;
    /**
     * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The
     * maximum allowed value is 900 seconds. For more information, see [Lambda execution
     * environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
     */
    public readonly timeout!: pulumi.Output<number>;
    /**
     * Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with
     * [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
     */
    public readonly tracingConfig!: pulumi.Output<outputs.LambdaFunctionTracingConfig>;
    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you
     * connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see
     * [Configuring a Lambda function to access resources in a
     * VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
     */
    public readonly vpcConfig!: pulumi.Output<outputs.LambdaFunctionVpcConfig>;

    /**
     * Create a LambdaFunction resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LambdaFunctionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LambdaFunctionArgs | LambdaFunctionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LambdaFunctionState | undefined;
            resourceInputs["architectures"] = state ? state.architectures : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["code"] = state ? state.code : undefined;
            resourceInputs["codeSigningConfigArn"] = state ? state.codeSigningConfigArn : undefined;
            resourceInputs["deadLetterConfig"] = state ? state.deadLetterConfig : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["environment"] = state ? state.environment : undefined;
            resourceInputs["ephemeralStorage"] = state ? state.ephemeralStorage : undefined;
            resourceInputs["fileSystemConfigs"] = state ? state.fileSystemConfigs : undefined;
            resourceInputs["functionName"] = state ? state.functionName : undefined;
            resourceInputs["handler"] = state ? state.handler : undefined;
            resourceInputs["imageConfig"] = state ? state.imageConfig : undefined;
            resourceInputs["kmsKeyArn"] = state ? state.kmsKeyArn : undefined;
            resourceInputs["layers"] = state ? state.layers : undefined;
            resourceInputs["loggingConfig"] = state ? state.loggingConfig : undefined;
            resourceInputs["memorySize"] = state ? state.memorySize : undefined;
            resourceInputs["packageType"] = state ? state.packageType : undefined;
            resourceInputs["recursiveLoop"] = state ? state.recursiveLoop : undefined;
            resourceInputs["reservedConcurrentExecutions"] = state ? state.reservedConcurrentExecutions : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["runtime"] = state ? state.runtime : undefined;
            resourceInputs["runtimeManagementConfig"] = state ? state.runtimeManagementConfig : undefined;
            resourceInputs["snapStart"] = state ? state.snapStart : undefined;
            resourceInputs["snapStartResponse"] = state ? state.snapStartResponse : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["tracingConfig"] = state ? state.tracingConfig : undefined;
            resourceInputs["vpcConfig"] = state ? state.vpcConfig : undefined;
        } else {
            const args = argsOrState as LambdaFunctionArgs | undefined;
            if ((!args || args.code === undefined) && !opts.urn) {
                throw new Error("Missing required property 'code'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            resourceInputs["architectures"] = args ? args.architectures : undefined;
            resourceInputs["code"] = args ? args.code : undefined;
            resourceInputs["codeSigningConfigArn"] = args ? args.codeSigningConfigArn : undefined;
            resourceInputs["deadLetterConfig"] = args ? args.deadLetterConfig : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["ephemeralStorage"] = args ? args.ephemeralStorage : undefined;
            resourceInputs["fileSystemConfigs"] = args ? args.fileSystemConfigs : undefined;
            resourceInputs["functionName"] = args ? args.functionName : undefined;
            resourceInputs["handler"] = args ? args.handler : undefined;
            resourceInputs["imageConfig"] = args ? args.imageConfig : undefined;
            resourceInputs["kmsKeyArn"] = args ? args.kmsKeyArn : undefined;
            resourceInputs["layers"] = args ? args.layers : undefined;
            resourceInputs["loggingConfig"] = args ? args.loggingConfig : undefined;
            resourceInputs["memorySize"] = args ? args.memorySize : undefined;
            resourceInputs["packageType"] = args ? args.packageType : undefined;
            resourceInputs["recursiveLoop"] = args ? args.recursiveLoop : undefined;
            resourceInputs["reservedConcurrentExecutions"] = args ? args.reservedConcurrentExecutions : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["runtime"] = args ? args.runtime : undefined;
            resourceInputs["runtimeManagementConfig"] = args ? args.runtimeManagementConfig : undefined;
            resourceInputs["snapStart"] = args ? args.snapStart : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["tracingConfig"] = args ? args.tracingConfig : undefined;
            resourceInputs["vpcConfig"] = args ? args.vpcConfig : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["snapStartResponse"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LambdaFunction.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LambdaFunction resources.
 */
export interface LambdaFunctionState {
    /**
     * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or
     * x86_64). The default value is ``x86_64``.
     */
    architectures?: pulumi.Input<pulumi.Input<string>[]>;
    arn?: pulumi.Input<string>;
    /**
     * The code for the function.
     */
    code?: pulumi.Input<inputs.LambdaFunctionCode>;
    /**
     * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration
     * includes a set of signing profiles, which define the trusted publishers for this function.
     */
    codeSigningConfigArn?: pulumi.Input<string>;
    /**
     * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they
     * fail processing. For more information, see [Dead-letter
     * queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
     */
    deadLetterConfig?: pulumi.Input<inputs.LambdaFunctionDeadLetterConfig>;
    /**
     * A description of the function.
     */
    description?: pulumi.Input<string>;
    /**
     * Environment variables that are accessible from function code during execution.
     */
    environment?: pulumi.Input<inputs.LambdaFunctionEnvironment>;
    /**
     * The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between
     * 512 and 10,240 MB.
     */
    ephemeralStorage?: pulumi.Input<inputs.LambdaFunctionEphemeralStorage>;
    /**
     * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be
     * available in every Availability Zone that your function connects to. If your template contains an
     * [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html)
     * resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before
     * the function. For more information about using the ``DependsOn`` attribute, see [DependsOn
     * Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
     */
    fileSystemConfigs?: pulumi.Input<pulumi.Input<inputs.LambdaFunctionFileSystemConfig>[]>;
    /**
     * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one. If you
     * specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that
     * require no or some interruption. If you must replace the resource, specify a new name.
     */
    functionName?: pulumi.Input<string>;
    /**
     * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment
     * package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers,
     * depending on the runtime. For more information, see [Lambda programming
     * model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
     */
    handler?: pulumi.Input<string>;
    /**
     * Configuration values that override the container image Dockerfile settings. For more information, see [Container image
     * settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
     */
    imageConfig?: pulumi.Input<inputs.LambdaFunctionImageConfig>;
    /**
     * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's [environment
     * variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
     * When [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) is activated, Lambda also
     * uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also
     * uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect
     * your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key,
     * Lambda uses a default service key.
     */
    kmsKeyArn?: pulumi.Input<string>;
    /**
     * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the
     * function's execution environment. Specify each layer by its ARN, including the version.
     */
    layers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The function's Amazon CloudWatch Logs configuration settings.
     */
    loggingConfig?: pulumi.Input<inputs.LambdaFunctionLoggingConfig>;
    /**
     * The amount of [memory available to the
     * function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console)
     * at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can
     * be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas
     * automatically based on your usage. You can also request a quota increase.
     */
    memorySize?: pulumi.Input<number>;
    /**
     * The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
     */
    packageType?: pulumi.Input<string>;
    /**
     * The function recursion configuration.
     */
    recursiveLoop?: pulumi.Input<string>;
    /**
     * The number of simultaneous executions to reserve for the function.
     */
    reservedConcurrentExecutions?: pulumi.Input<number>;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    role?: pulumi.Input<string>;
    /**
     * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime
     * is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're
     * deploying a function using a container image. The following list includes deprecated runtimes. Lambda blocks creating
     * new functions and updating existing functions shortly after each runtime is deprecated. For more information, see
     * [Runtime use after
     * deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels). For a list
     * of all currently supported runtimes, see [Supported
     * runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
     */
    runtime?: pulumi.Input<string>;
    /**
     * Sets the runtime management configuration for a function's version. For more information, see [Runtime
     * updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
     */
    runtimeManagementConfig?: pulumi.Input<inputs.LambdaFunctionRuntimeManagementConfig>;
    /**
     * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     */
    snapStart?: pulumi.Input<inputs.LambdaFunctionSnapStart>;
    /**
     * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     */
    snapStartResponse?: pulumi.Input<inputs.LambdaFunctionSnapStartResponse>;
    /**
     * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LambdaFunctionTag>[]>;
    /**
     * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The
     * maximum allowed value is 900 seconds. For more information, see [Lambda execution
     * environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
     */
    timeout?: pulumi.Input<number>;
    /**
     * Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with
     * [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
     */
    tracingConfig?: pulumi.Input<inputs.LambdaFunctionTracingConfig>;
    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you
     * connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see
     * [Configuring a Lambda function to access resources in a
     * VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
     */
    vpcConfig?: pulumi.Input<inputs.LambdaFunctionVpcConfig>;
}

/**
 * The set of arguments for constructing a LambdaFunction resource.
 */
export interface LambdaFunctionArgs {
    /**
     * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or
     * x86_64). The default value is ``x86_64``.
     */
    architectures?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The code for the function.
     */
    code: pulumi.Input<inputs.LambdaFunctionCode>;
    /**
     * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration
     * includes a set of signing profiles, which define the trusted publishers for this function.
     */
    codeSigningConfigArn?: pulumi.Input<string>;
    /**
     * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they
     * fail processing. For more information, see [Dead-letter
     * queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
     */
    deadLetterConfig?: pulumi.Input<inputs.LambdaFunctionDeadLetterConfig>;
    /**
     * A description of the function.
     */
    description?: pulumi.Input<string>;
    /**
     * Environment variables that are accessible from function code during execution.
     */
    environment?: pulumi.Input<inputs.LambdaFunctionEnvironment>;
    /**
     * The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between
     * 512 and 10,240 MB.
     */
    ephemeralStorage?: pulumi.Input<inputs.LambdaFunctionEphemeralStorage>;
    /**
     * Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be
     * available in every Availability Zone that your function connects to. If your template contains an
     * [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html)
     * resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before
     * the function. For more information about using the ``DependsOn`` attribute, see [DependsOn
     * Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
     */
    fileSystemConfigs?: pulumi.Input<pulumi.Input<inputs.LambdaFunctionFileSystemConfig>[]>;
    /**
     * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one. If you
     * specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that
     * require no or some interruption. If you must replace the resource, specify a new name.
     */
    functionName?: pulumi.Input<string>;
    /**
     * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment
     * package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers,
     * depending on the runtime. For more information, see [Lambda programming
     * model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
     */
    handler?: pulumi.Input<string>;
    /**
     * Configuration values that override the container image Dockerfile settings. For more information, see [Container image
     * settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
     */
    imageConfig?: pulumi.Input<inputs.LambdaFunctionImageConfig>;
    /**
     * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's [environment
     * variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
     * When [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) is activated, Lambda also
     * uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also
     * uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect
     * your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key,
     * Lambda uses a default service key.
     */
    kmsKeyArn?: pulumi.Input<string>;
    /**
     * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the
     * function's execution environment. Specify each layer by its ARN, including the version.
     */
    layers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The function's Amazon CloudWatch Logs configuration settings.
     */
    loggingConfig?: pulumi.Input<inputs.LambdaFunctionLoggingConfig>;
    /**
     * The amount of [memory available to the
     * function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console)
     * at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can
     * be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas
     * automatically based on your usage. You can also request a quota increase.
     */
    memorySize?: pulumi.Input<number>;
    /**
     * The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
     */
    packageType?: pulumi.Input<string>;
    /**
     * The function recursion configuration.
     */
    recursiveLoop?: pulumi.Input<string>;
    /**
     * The number of simultaneous executions to reserve for the function.
     */
    reservedConcurrentExecutions?: pulumi.Input<number>;
    /**
     * The Amazon Resource Name (ARN) of the function's execution role.
     */
    role: pulumi.Input<string>;
    /**
     * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime
     * is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're
     * deploying a function using a container image. The following list includes deprecated runtimes. Lambda blocks creating
     * new functions and updating existing functions shortly after each runtime is deprecated. For more information, see
     * [Runtime use after
     * deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels). For a list
     * of all currently supported runtimes, see [Supported
     * runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
     */
    runtime?: pulumi.Input<string>;
    /**
     * Sets the runtime management configuration for a function's version. For more information, see [Runtime
     * updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
     */
    runtimeManagementConfig?: pulumi.Input<inputs.LambdaFunctionRuntimeManagementConfig>;
    /**
     * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
     */
    snapStart?: pulumi.Input<inputs.LambdaFunctionSnapStart>;
    /**
     * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.LambdaFunctionTag>[]>;
    /**
     * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The
     * maximum allowed value is 900 seconds. For more information, see [Lambda execution
     * environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
     */
    timeout?: pulumi.Input<number>;
    /**
     * Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with
     * [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
     */
    tracingConfig?: pulumi.Input<inputs.LambdaFunctionTracingConfig>;
    /**
     * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you
     * connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see
     * [Configuring a Lambda function to access resources in a
     * VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
     */
    vpcConfig?: pulumi.Input<inputs.LambdaFunctionVpcConfig>;
}
