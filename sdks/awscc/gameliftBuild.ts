// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GameliftBuild extends pulumi.CustomResource {
    /**
     * Get an existing GameliftBuild resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GameliftBuildState, opts?: pulumi.CustomResourceOptions): GameliftBuild {
        return new GameliftBuild(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/gameliftBuild:GameliftBuild';

    /**
     * Returns true if the given object is an instance of GameliftBuild.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GameliftBuild {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GameliftBuild.__pulumiType;
    }

    /**
     * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game
     * build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a
     * READY status. This fleet setting cannot be changed once the fleet is created.
     */
    public /*out*/ readonly buildId!: pulumi.Output<string>;
    /**
     * A descriptive label that is associated with a build. Build names do not need to be unique.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The operating system that the game server binaries are built to run on. This value determines the type of fleet
     * resources that you can use for this build. If your game build contains multiple executables, they all must run on the
     * same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default
     * value (WINDOWS_2012). This value cannot be changed later.
     */
    public readonly operatingSystem!: pulumi.Output<string>;
    /**
     * A server SDK version you used when integrating your game server build with Amazon GameLift. By default Amazon GameLift
     * sets this value to 4.0.2.
     */
    public readonly serverSdkVersion!: pulumi.Output<string>;
    /**
     * Information indicating where your game build files are stored. Use this parameter only when creating a build with files
     * stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The
     * location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3
     * bucket and your new build must be in the same Region.
     */
    public readonly storageLocation!: pulumi.Output<outputs.GameliftBuildStorageLocation>;
    /**
     * Version information that is associated with this build. Version strings do not need to be unique.
     */
    public readonly version!: pulumi.Output<string>;

    /**
     * Create a GameliftBuild resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: GameliftBuildArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GameliftBuildArgs | GameliftBuildState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GameliftBuildState | undefined;
            resourceInputs["buildId"] = state ? state.buildId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["operatingSystem"] = state ? state.operatingSystem : undefined;
            resourceInputs["serverSdkVersion"] = state ? state.serverSdkVersion : undefined;
            resourceInputs["storageLocation"] = state ? state.storageLocation : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as GameliftBuildArgs | undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["operatingSystem"] = args ? args.operatingSystem : undefined;
            resourceInputs["serverSdkVersion"] = args ? args.serverSdkVersion : undefined;
            resourceInputs["storageLocation"] = args ? args.storageLocation : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["buildId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GameliftBuild.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GameliftBuild resources.
 */
export interface GameliftBuildState {
    /**
     * A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game
     * build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a
     * READY status. This fleet setting cannot be changed once the fleet is created.
     */
    buildId?: pulumi.Input<string>;
    /**
     * A descriptive label that is associated with a build. Build names do not need to be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The operating system that the game server binaries are built to run on. This value determines the type of fleet
     * resources that you can use for this build. If your game build contains multiple executables, they all must run on the
     * same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default
     * value (WINDOWS_2012). This value cannot be changed later.
     */
    operatingSystem?: pulumi.Input<string>;
    /**
     * A server SDK version you used when integrating your game server build with Amazon GameLift. By default Amazon GameLift
     * sets this value to 4.0.2.
     */
    serverSdkVersion?: pulumi.Input<string>;
    /**
     * Information indicating where your game build files are stored. Use this parameter only when creating a build with files
     * stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The
     * location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3
     * bucket and your new build must be in the same Region.
     */
    storageLocation?: pulumi.Input<inputs.GameliftBuildStorageLocation>;
    /**
     * Version information that is associated with this build. Version strings do not need to be unique.
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GameliftBuild resource.
 */
export interface GameliftBuildArgs {
    /**
     * A descriptive label that is associated with a build. Build names do not need to be unique.
     */
    name?: pulumi.Input<string>;
    /**
     * The operating system that the game server binaries are built to run on. This value determines the type of fleet
     * resources that you can use for this build. If your game build contains multiple executables, they all must run on the
     * same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default
     * value (WINDOWS_2012). This value cannot be changed later.
     */
    operatingSystem?: pulumi.Input<string>;
    /**
     * A server SDK version you used when integrating your game server build with Amazon GameLift. By default Amazon GameLift
     * sets this value to 4.0.2.
     */
    serverSdkVersion?: pulumi.Input<string>;
    /**
     * Information indicating where your game build files are stored. Use this parameter only when creating a build with files
     * stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The
     * location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3
     * bucket and your new build must be in the same Region.
     */
    storageLocation?: pulumi.Input<inputs.GameliftBuildStorageLocation>;
    /**
     * Version information that is associated with this build. Version strings do not need to be unique.
     */
    version?: pulumi.Input<string>;
}
