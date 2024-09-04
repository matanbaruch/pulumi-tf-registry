// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * The provider type for the fortimanager package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export class Provider extends pulumi.ProviderResource {
    /** @internal */
    public static readonly __pulumiType = 'fortimanager';

    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Provider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === "pulumi:providers:" + Provider.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    /**
     * CA Bundle file
     */
    public readonly cabundlefile!: pulumi.Output<string | undefined>;
    public readonly fmgCloudToken!: pulumi.Output<string | undefined>;
    public readonly fmgType!: pulumi.Output<string | undefined>;
    /**
     * The hostname/IP address of the FORTIMANAGER to be connected
     */
    public readonly hostname!: pulumi.Output<string | undefined>;
    public readonly password!: pulumi.Output<string | undefined>;
    public readonly presession!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly token!: pulumi.Output<string | undefined>;
    public readonly username!: pulumi.Output<string | undefined>;

    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        {
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["cabundlefile"] = args ? args.cabundlefile : undefined;
            resourceInputs["cleanSession"] = pulumi.output(args ? args.cleanSession : undefined).apply(JSON.stringify);
            resourceInputs["fmgCloudToken"] = args ? args.fmgCloudToken : undefined;
            resourceInputs["fmgType"] = args ? args.fmgType : undefined;
            resourceInputs["hostname"] = args ? args.hostname : undefined;
            resourceInputs["importOptions"] = pulumi.output(args ? args.importOptions : undefined).apply(JSON.stringify);
            resourceInputs["insecure"] = pulumi.output(args ? args.insecure : undefined).apply(JSON.stringify);
            resourceInputs["logsession"] = pulumi.output(args ? args.logsession : undefined).apply(JSON.stringify);
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["presession"] = args ? args.presession : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["token"] = args ? args.token : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Provider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    adom?: pulumi.Input<string>;
    /**
     * CA Bundle file
     */
    cabundlefile?: pulumi.Input<string>;
    cleanSession?: pulumi.Input<boolean>;
    fmgCloudToken?: pulumi.Input<string>;
    fmgType?: pulumi.Input<string>;
    /**
     * The hostname/IP address of the FORTIMANAGER to be connected
     */
    hostname?: pulumi.Input<string>;
    importOptions?: pulumi.Input<pulumi.Input<string>[]>;
    insecure?: pulumi.Input<boolean>;
    logsession?: pulumi.Input<boolean>;
    password?: pulumi.Input<string>;
    presession?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    token?: pulumi.Input<string>;
    username?: pulumi.Input<string>;
}
